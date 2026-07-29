import { Job } from '../models/index.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.status(200).json({ status: 'success', results: jobs.length, data: { jobs } });
});

export const createJob = catchAsync(async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(201).json({ status: 'success', data: { job } });
});

export const updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  if (!job) return next(new AppError('No job found with that ID', 404));
  
  res.status(200).json({ status: 'success', data: { job } });
});

export const deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  
  if (!job) return next(new AppError('No job found with that ID', 404));
  
  res.status(204).json({ status: 'success', data: null });
});
