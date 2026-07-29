import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/index.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for seeding...');

    const adminExists = await User.findOne({ email: 'admin@nguvuteach.org' });
    if (adminExists) {
      console.log('⚠️ Admin user already exists. Exiting.');
      process.exit(0);
    }

    await User.create({
      name: 'Super Admin',
      email: 'admin@nguvuteach.org',
      password: 'Admin123!',
      role: 'Admin'
    });

    console.log('🎉 Default Admin user created successfully!');
    console.log('----------------------------------------');
    console.log('Email:    admin@nguvuteach.org');
    console.log('Password: Admin123!');
    console.log('----------------------------------------');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    console.error('Full stack trace:', error); // This tells us exactly which file is broken!
    process.exit(1);
  }
};

seedAdmin();
