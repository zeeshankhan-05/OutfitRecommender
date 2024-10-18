const Clothing = require('../models/Clothing');

// Add a new clothing item
exports.addClothingItem = async (req, res) => {
  const { type, color, imageUrl, occasion, weatherCategory, status, userId } = req.body;
  try {
    const newClothing = new Clothing({ type, color, imageUrl, occasion, weatherCategory, status, userId });
    await newClothing.save();
    res.status(201).json(newClothing);
  } catch (error) {
    res.status(500).json({ message: 'Error adding clothing item', error });
  }
};

// Get all clothing items for a user
exports.getClothingItems = async (req, res) => {
  try {
    const clothes = await Clothing.find({ userId: req.user.id });
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving clothing items', error });
  }
};
