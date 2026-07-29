import mongoose from 'mongoose';

const newsEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Event', 'News', 'Workshop', 'Announcement'], default: 'Event' },
  date: { type: Date, required: true },
  time: { type: String },
  location: { type: String, required: true },
  description: { type: String, required: true },
  published: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('NewsEvent', newsEventSchema);
