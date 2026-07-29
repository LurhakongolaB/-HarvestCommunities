import express from 'express';
import { 
  getAllVolunteers, 
  createVolunteer, 
  updateVolunteer, 
  deleteVolunteer 
} from '../controllers/volunteerController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getAllVolunteers)
  .post(protect, createVolunteer);

router.route('/:id')
  .put(protect, updateVolunteer)
  .delete(protect, deleteVolunteer);

export default router;
