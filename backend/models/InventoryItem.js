// models/inventoryItem.js

const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: String,
  vendor: String,
}, { collection: 'Inventory' });

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
