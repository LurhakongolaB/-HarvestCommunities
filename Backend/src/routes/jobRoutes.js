import express from 'express';
import { 
  getAllJobs, 
  createJob, 
  updateJob, 
  deleteJob 
} from '../controllers/jobController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getAllJobs)
  .post(protect, createJob);

router.route('/:id')
  .put(protect, updateJob)
  .delete(protect, deleteJob);

export default router;
