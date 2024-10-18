const express = require('express');
const router = express.Router();
const clothingController = require('../controllers/clothingController');
const authenticate = require('../middleware/authMiddleware');

// Add new clothing item
router.post('/clothes', authenticate, clothingController.addClothingItem);

// Get all clothing items for a user
router.get('/clothes', authenticate, clothingController.getClothingItems);

module.exports = router;