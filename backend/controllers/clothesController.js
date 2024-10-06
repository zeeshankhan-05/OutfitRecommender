const Clothing = require('../models/Clothing');

// Add new clothing item to the wardrobe
exports.addClothingItem = async (req, res) => {
  try {
    const newClothing = new Clothing(req.body);
    await newClothing.save();
    res.status(201).json(newClothing);
  } catch (error) {
    res.status(500).json({ message: 'Error adding clothing item' });
  }
};

// Retrieve wardrobe for a user
exports.getClothingItems = async (req, res) => {
  try {
    const clothes = await Clothing.find({ userId: req.user.id });
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving clothing items' });
  }
};
