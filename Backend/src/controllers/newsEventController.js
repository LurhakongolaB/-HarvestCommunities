import { NewsEvent } from '../models/index.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getAllNewsEvents = catchAsync(async (req, res, next) => {
  const items = await NewsEvent.find().sort({ date: -1 });
  res.status(200).json({ status: 'success', results: items.length, data: { items } });
});

export const createNewsEvent = catchAsync(async (req, res, next) => {
  const item = await NewsEvent.create(req.body);
  res.status(201).json({ status: 'success', data: { item } });
});

export const updateNewsEvent = catchAsync(async (req, res, next) => {
  const item = await NewsEvent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return next(new AppError('No item found with that ID', 404));
  res.status(200).json({ status: 'success', data: { item } });
});

export const deleteNewsEvent = catchAsync(async (req, res, next) => {
  const item = await NewsEvent.findByIdAndDelete(req.params.id);
  if (!item) return next(new AppError('No item found with that ID', 404));
  res.status(204).json({ status: 'success', data: null });
});
