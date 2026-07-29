// backend/src/routes/authRoutes.js
import express from 'express';
import {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getMe,
  updatePassword
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.patch('/resetpassword/:token', resetPassword);

// Protected routes
router.use(protect);

router.get('/logout', logout);
router.get('/me', getMe);
router.patch('/updatepassword', updatePassword);

export default router;