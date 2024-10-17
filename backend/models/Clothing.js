const mongoose = require('mongoose');

const ClothingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: { type: String, required: true },
  occasion: { type: String, enum: ['Casual', 'Formal', 'Party', 'Work'], default: 'Casual' },
  weatherCategory: { type: String, enum: ['Warm', 'Cold', 'Rainy'], default: 'Warm' },
  status: { type: String, enum: ['Clean', 'Dirty'], default: 'Clean' },
  imageUrl: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Clothing', ClothingSchema);
