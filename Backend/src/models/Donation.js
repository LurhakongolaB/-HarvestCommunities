import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true, trim: true },
  donorEmail: { type: String, required: true, lowercase: true },
  amount: { type: Number, required: true, min: 1 },
  currency: { type: String, default: 'USD', enum: ['USD', 'KES', 'EUR', 'GBP'] },
  method: { type: String, enum: ['PayPal', 'M-Pesa', 'Stripe', 'BuyMeACoffee', 'Manual'], required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Failed', 'Refunded'], default: 'Pending' },
  transactionId: { type: String, sparse: true }, // Optional, populated by payment gateway
  message: { type: String, default: '' } // Optional donor message
}, { timestamps: true });

donationSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model('Donation', donationSchema);