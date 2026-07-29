import crypto from 'crypto';
import { User } from '../models/index.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';
import { generateToken } from '../utils/generateToken.js';

const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);
  
  const cookieOptions = {
    expires: new Date(Date.now() + (process.env.JWT_EXPIRES_IN_DAYS || 90) * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  };

  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user }
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || 'Viewer',
  });
  createSendToken(newUser, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  console.log('--- 🔍 LOGIN ATTEMPT DEBUG ---');
  console.log('1. Received email:', req.body.email);
  console.log('2. Received password:', req.body.password);
  
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');
  console.log('3. User found in database?', user ? 'YES' : 'NO');
  
  if (!user) {
    console.log('❌ FAIL: User not found');
    return next(new AppError('Incorrect email or password', 401));
  }

  const isMatch = await user.correctPassword(password, user.password);
  console.log('4. Password matches?', isMatch);

  if (!isMatch) {
    console.log('❌ FAIL: Password does not match');
    return next(new AppError('Incorrect email or password', 401));
  }

  console.log('✅ SUCCESS: Logging in user');
  createSendToken(user, 200, res);
});

export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

export const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError('There is no user with that email address.', 404));

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    message: 'Token sent to email (Dev mode: token returned below)',
    resetToken,
  });
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  user.passwordChangedAt = Date.now();
  await user.save();

  createSendToken(user, 200, res);
});

export const getMe = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: { user: req.user }
  });
};

export const updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  user.password = req.body.password;
  user.passwordChangedAt = Date.now();
  await user.save();

  createSendToken(user, 200, res);
});
