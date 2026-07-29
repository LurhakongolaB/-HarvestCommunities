import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import authRouter from './routes/authRoutes.js';
import settingRouter from './routes/settingRoutes.js';
import impactStoryRouter from './routes/impactStoryRoutes.js';
import volunteerRouter from './routes/volunteerRoutes.js';
import jobRouter from './routes/jobRoutes.js';
import newsEventRouter from './routes/newsEventRoutes.js';

dotenv.config();

const app = express();

// CORS Configuration - Allow ALL localhost ports in development
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [process.env.FRONTEND_URL] 
  : [
      'http://localhost:5173',
      'http://localhost:5174', 
      'http://localhost:5175',
      'http://localhost:5176',
      'http://localhost:5177', 'http://localhost:5181', 'http://localhost:5182',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174',
      'http://127.0.0.1:5175',
      'http://127.0.0.1:5176',
      'http://127.0.0.1:5177', 'http://127.0.0.1:5181', 'http://127.0.0.1:5182',
      '*' // Allow all in dev mode
    ];

console.log('🔒 CORS allowed origins:', allowedOrigins);

app.use(helmet());
app.use(cors({ 
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'SUHACO API is running 🚀' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/settings', settingRouter);
app.use('/api/v1/impact-stories', impactStoryRouter);
app.use('/api/v1/volunteers', volunteerRouter);
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/news-events', newsEventRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

export default app;
