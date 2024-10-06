const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothesController');

// Add new clothing items
router.post('/clothes', clothesController.addClothingItem);

// Get all clothing items for a user
router.get('/clothes', clothesController.getClothingItems);

module.exports = router;