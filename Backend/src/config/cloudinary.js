import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// DEBUG LOG: Check what is actually being read
console.log('--- CLOUDINARY CONFIG DEBUG ---');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY ? '*** Present ***' : '*** MISSING ***');
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? '*** Present ***' : '*** MISSING ***');
console.log('-------------------------------');

export default cloudinary;
