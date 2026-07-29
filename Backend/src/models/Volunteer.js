import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  role: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String },
  commitment: { type: String, enum: ['Flexible', 'Weekly (1-5 hrs)', 'Weekly (5-10 hrs)', 'Monthly Event'], default: 'Flexible' },
  location: { type: String, required: true },
  deadline: { type: Date, required: true },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Volunteer', volunteerSchema);
