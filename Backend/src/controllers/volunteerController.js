import { Volunteer } from '../models/index.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getAllVolunteers = catchAsync(async (req, res, next) => {
  const volunteers = await Volunteer.find().sort({ createdAt: -1 });
  res.status(200).json({ status: 'success', results: volunteers.length, data: { volunteers } });
});

export const createVolunteer = catchAsync(async (req, res, next) => {
  const volunteer = await Volunteer.create(req.body);
  res.status(201).json({ status: 'success', data: { volunteer } });
});

export const updateVolunteer = catchAsync(async (req, res, next) => {
  const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  if (!volunteer) return next(new AppError('No volunteer found with that ID', 404));
  
  res.status(200).json({ status: 'success', data: { volunteer } });
});

export const deleteVolunteer = catchAsync(async (req, res, next) => {
  const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
  
  if (!volunteer) return next(new AppError('No volunteer found with that ID', 404));
  
  res.status(204).json({ status: 'success', data: null });
});
