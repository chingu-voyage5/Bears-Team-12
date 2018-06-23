const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Schema
require('./models/Order');
require('./models/Item');

// MongoDB connection
mongoose.connect('mongodb://localhost/feast');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', error => {
    console.warn('Warning', error);
  });

const Order = mongoose.model('orders');
const Item = mongoose.model('items');

const app = express();
app.use(bodyParser.json());

// Routes
// Order routes
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find({});

  res.send(orders);
});

app.post('/api/orders', async (req, res) => {
  const { name, notes, order } = req.body;
  const items = [];

  for (const key in order) {
    if (order[key].count > 0) {
      items.push({ name: key, count: order[key].count });
    }
  }

  const newOrder = new Order({
    name,
    items,
    notes: notes || null,
    created: Date.now(),
    updated: Date.now()
  });

  const savedNewOrder = await newOrder.save();

  res.send(savedNewOrder);
});

app.post('/api/orders/:orderId', async (req, res) => {
  const { newStatus } = req.body;
  const { orderId } = req.params;

  const updatedOrder = await Item.findByIdAndUpdate(orderId, { status: newStatus });

  res.send(updatedOrder);
});

// Item routes
app.post('/api/items', async (req, res) => {
  const { name, price, type, soup } = req.body;

  const newItem = new Item({
    name,
    price,
    type
  });

  const item = await newItem.save();

  res.send(item);
});

app.get('/api/items', async (req, res) => {
  const items = await Item.find({});

  res.send(items);
});

app.post('/api/items/:itemId', async (req, res) => {
  const { newPrice } = req.body;
  const { itemId } = req.params;

  const newItem = await Item.findByIdAndUpdate(itemId, { price: newPrice });

  res.send(newItem);
});

// PORT
app.listen(5000);
