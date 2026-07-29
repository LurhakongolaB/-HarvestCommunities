import { ImpactStory } from '../models/index.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryUpload.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const getAllStories = catchAsync(async (req, res, next) => {
  const stories = await ImpactStory.find().sort({ date: -1 });
  res.status(200).json({ status: 'success', results: stories.length, data: { stories } });
});

export const getStory = catchAsync(async (req, res, next) => {
  const story = await ImpactStory.findOne({ slug: req.params.slug });
  if (!story) return next(new AppError('No story found with that slug', 404));
  res.status(200).json({ status: 'success', data: { story } });
});

export const createStory = catchAsync(async (req, res, next) => {
  console.log('\n--- 🔍 BACKEND DEBUG: CREATE STORY ---');
  console.log('1. req.body:', req.body);
  console.log('2. req.files:', req.files ? req.files.length + ' files' : 'No files');
  console.log('3. req.user:', req.user ? req.user._id : 'NO USER');

  if (!req.user) {
    return next(new AppError('You must be logged in to create a story', 401));
  }

  const storyData = { 
    ...req.body, 
    author: req.user._id 
  };

  if (req.files && req.files.length > 0) {
    console.log('⏳ Uploading to Cloudinary...');
    try {
      const uploadedImages = await Promise.all(
        req.files.map(async (file, index) => {
          const uploadResult = await uploadToCloudinary(file.buffer, 'impact-stories');
          return {
            url: uploadResult.url,
            publicId: uploadResult.publicId,
            caption: req.body.captions ? req.body.captions[index] : '',
            order: index
          };
        })
      );
      storyData.images = uploadedImages;
      console.log('✅ Cloudinary upload successful!');
    } catch (cloudinaryErr) {
      console.error('❌ CLOUDINARY ERROR:', cloudinaryErr.message);
      return next(new AppError('Failed to upload images: ' + cloudinaryErr.message, 500));
    }
  }

  console.log('⏳ Saving to MongoDB...');
  try {
    const story = await ImpactStory.create(storyData);
    console.log('✅ SUCCESS: Story saved with ID:', story._id);
    res.status(201).json({ status: 'success', data: { story } });
  } catch (dbError) {
    console.error('❌ MONGODB ERROR:', dbError.message);
    return next(new AppError('Database error: ' + dbError.message, 400));
  }
});

export const updateStory = catchAsync(async (req, res, next) => {
  const story = await ImpactStory.findById(req.params.id);
  if (!story) return next(new AppError('No story found with that ID', 404));

  const storyData = { ...req.body };

  if (req.files && req.files.length > 0) {
    const uploadedImages = await Promise.all(
      req.files.map(async (file, index) => {
        const uploadResult = await uploadToCloudinary(file.buffer, 'impact-stories');
        return {
          url: uploadResult.url,
          publicId: uploadResult.publicId,
          caption: req.body.captions ? req.body.captions[index] : '',
          order: story.images.length + index
        };
      })
    );
    storyData.images = [...(story.images || []), ...uploadedImages];
  }

  const updatedStory = await ImpactStory.findByIdAndUpdate(req.params.id, storyData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: { story: updatedStory } });
});

export const deleteStory = catchAsync(async (req, res, next) => {
  const story = await ImpactStory.findById(req.params.id);
  if (!story) return next(new AppError('No story found', 404));

  if (story.images && story.images.length > 0) {
    await Promise.all(story.images.map(img => deleteFromCloudinary(img.publicId)));
  }

  await ImpactStory.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: 'success', data: null });
});

export const deleteStoryImage = catchAsync(async (req, res, next) => {
  const { storyId, imageId } = req.params;
  const story = await ImpactStory.findById(storyId);
  
  const imageToRemove = story.images.id(imageId);
  if (!imageToRemove) return next(new AppError('Image not found', 404));

  await deleteFromCloudinary(imageToRemove.publicId);
  imageToRemove.remove();
  await story.save();

  res.status(200).json({ status: 'success', data: { story } });
});
