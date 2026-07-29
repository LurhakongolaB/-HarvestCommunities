import mongoose from 'mongoose';

const newsArticleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  excerpt: { type: String, required: true, maxlength: 300 },
  content: { type: String, required: true }, // Rich text HTML
  featuredImage: {
    url: { type: String, required: true },
    publicId: { type: String, required: true }
  },
  categories: [{ type: String }],
  tags: [{ type: String }],
  status: { type: String, enum: ['draft', 'published', 'scheduled'], default: 'draft' },
  publishDate: { type: Date },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  views: { type: Number, default: 0 }
}, { timestamps: true });

newsArticleSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  // Auto-set publishDate to now if status changes to published and no date is set
  if (this.isModified('status') && this.status === 'published' && !this.publishDate) {
    this.publishDate = new Date();
  }
  next();
});

// Index for fast querying of published articles
newsArticleSchema.index({ status: 1, publishDate: -1 });

export default mongoose.model('NewsArticle', newsArticleSchema);