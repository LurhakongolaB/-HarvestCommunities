import express from 'express';
import { getSettings, updateSettings } from '../controllers/settingController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public route to get settings (for the frontend homepage)
router.get('/', getSettings);

// Protected route: Only Admin/Editor can update
router.patch('/', protect, restrictTo('Admin', 'Editor'), updateSettings);

export default router;
