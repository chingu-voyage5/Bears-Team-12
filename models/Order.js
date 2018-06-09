const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const OrderSchema = new Schema({
  meal1: {
    type: String,
    required: true
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);
