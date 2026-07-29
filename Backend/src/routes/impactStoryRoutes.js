import express from 'express';
import {
  getAllStories,
  getStory,
  createStory,
  updateStory,
  deleteStory,
  deleteStoryImage
} from '../controllers/impactStoryController.js';
import { protect, restrictTo } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Public routes
router.get('/', getAllStories);
router.get('/:slug', getStory);

// Protected routes (Admin/Editor only)
router.use(protect, restrictTo('Admin', 'Editor'));

// 'images' is the field name for multer, max 10 images per request
router.post('/', upload.array('images', 10), createStory);
router.patch('/:id', upload.array('images', 10), updateStory);
router.delete('/:id', deleteStory);
router.delete('/:storyId/images/:imageId', deleteStoryImage);

export default router;
