const mongoose = require('mongoose');
const { Schema } = mongoose;
const ItemSchema = require('./Item');

const orderSchema = new Schema({
  created: Number,
  updated: Number,
  name: String,
  items: [Array],
  notes: { type: String, default: 'None' },
  table: { type: String, default: 'Not seated' },
  status: { type: Number, default: 1 }
});

mongoose.model('orders', orderSchema);
