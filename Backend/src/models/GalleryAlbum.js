import mongoose from 'mongoose';

const galleryAlbumSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, required: true, enum: ['Events', 'Programs', 'Community', 'General'] },
  featured: { type: Boolean, default: false },
  images: [{
    url: { type: String, required: true },
    publicId: { type: String, required: true }, // For Cloudinary deletion/updates
    caption: { type: String, default: '' },
    order: { type: Number, default: 0 }
  }]
}, { timestamps: true });

// Auto-generate slug from title
galleryAlbumSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  next();
});

export default mongoose.model('GalleryAlbum', galleryAlbumSchema);