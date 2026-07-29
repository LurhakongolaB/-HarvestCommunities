import { SiteSetting } from '../models/index.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getSettings = catchAsync(async (req, res, next) => {
  let settings = await SiteSetting.findOne();
  
  // If no settings exist, create default ones
  if (!settings) {
    settings = await SiteSetting.create({});
  }
  
  res.status(200).json({
    status: 'success',
    data: { settings }
  });
});

export const updateSettings = catchAsync(async (req, res, next) => {
  let settings = await SiteSetting.findOne();
  
  if (!settings) {
    settings = await SiteSetting.create(req.body);
  } else {
    settings = await SiteSetting.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
  }

  res.status(200).json({
    status: 'success',
    data: { settings }
  });
});
