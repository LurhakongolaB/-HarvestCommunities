import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  shortDescription: { type: String, required: true, maxlength: 200 },
  fullDescription: { type: String, required: true }, // Rich text
  status: { type: String, enum: ['Active', 'Completed', 'Upcoming', 'Paused'], default: 'Active' },
  location: { type: String, required: true },
  beneficiaries: { type: Number, default: 0 },
  budget: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  duration: { type: String, required: true }, // e.g., "6 months", "Ongoing"
  partners: [{ type: String }],
  documents: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
    publicId: { type: String, required: true }
  }],
  gallery: [{
    url: { type: String },
    publicId: { type: String }
  }],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

programSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  next();
});

export default mongoose.model('Program', programSchema);