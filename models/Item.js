const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  type: String,
  name: String,
  price: Number
});

mongoose.model('items', itemSchema);
