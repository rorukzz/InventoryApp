// routes/inventory.js

const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem');

// Route to get all inventory items
router.get('/', async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find();
    res.json(inventoryItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
