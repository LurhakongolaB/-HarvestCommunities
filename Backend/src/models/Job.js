import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String },
  type: { type: String, enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'], default: 'Full-Time' },
  location: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String },
  deadline: { type: Date, required: true },
  published: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);
