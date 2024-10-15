const mongoose = require('mongoose');

const mongoose = require('mongoose');

const ClothingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: { type: String, required: true },
  occasion: { type: String, enum: ['Casual', 'Formal', 'Work', 'Gym', 'Party'] },
  weatherCategory: { type: String, enum: ['Hot', 'Warm', 'Cold', 'Freezing', 'Rainy', 'Snowy'], default: 'Warm' },
  status: { type: String, enum: ['Clean', 'Dirty'], default: 'Clean' },
  imageUrl: String,    // URL to the clothing image
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Foreign key to the user who owns the clothing
});

module.exports = mongoose.model('Clothing', ClothingSchema);