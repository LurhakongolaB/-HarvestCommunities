// backend/src/models/SiteSetting.js
import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
  hero: {
    title: { type: String, default: 'Empowering Communities Through Technology' },
    subtitle: { type: String, default: 'Digital skills, education, and entrepreneurship for refugees and underserved communities.' },
    imageUrl: { type: String, default: '' },
    ctaText: { type: String, default: 'Explore Our Programs' },
    ctaLink: { type: String, default: '/programs' }
  },
  stats: [{
    label: { type: String },
    value: { type: String },
    icon: { type: String }
  }],
  about: {
    title: { type: String, default: 'About Nguvu-TEACH' },
    description: { type: String },
    imageUrl: { type: String }
  },
  donationGoal: {
    target: { type: Number, default: 50000 },
    current: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' }
  }
}, { timestamps: true });

settingSchema.pre('save', async function(next) {
  const count = await this.constructor.countDocuments();
  if (count > 1) {
    throw new Error('Only one SiteSetting document is allowed.');
  }
  next();
});

export default mongoose.model('SiteSetting', settingSchema);