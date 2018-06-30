const mongoose = require('mongoose');
const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: String,
  price: Number
});

mongoose.model('drinks', drinkSchema);
