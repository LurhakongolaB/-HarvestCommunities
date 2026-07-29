import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  position: { type: String, required: true },
  category: { type: String, enum: ['Staff', 'Volunteer', 'Board Member'], required: true },
  biography: { type: String, required: true },
  profilePhoto: {
    url: { type: String, required: true },
    publicId: { type: String, required: true }
  },
  socialLinks: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    email: { type: String, default: '' }
  },
  order: { type: Number, default: 0 }, // For custom sorting
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

teamMemberSchema.index({ category: 1, order: 1 });

export default mongoose.model('TeamMember', teamMemberSchema);