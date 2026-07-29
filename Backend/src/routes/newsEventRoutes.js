import express from 'express';
import { getAllNewsEvents, createNewsEvent, updateNewsEvent, deleteNewsEvent } from '../controllers/newsEventController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getAllNewsEvents)
  .post(protect, createNewsEvent);

router.route('/:id')
  .put(protect, updateNewsEvent)
  .delete(protect, deleteNewsEvent);

export default router;
