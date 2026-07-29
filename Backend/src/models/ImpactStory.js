import mongoose from 'mongoose';

const impactStorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true }, // Will store rich text HTML
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
  images: [{
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    caption: { type: String },
    order: { type: Number, default: 0 }
  }]
}, { timestamps: true });

export default mongoose.model('ImpactStory', impactStorySchema);