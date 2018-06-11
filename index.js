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
  const { name, notes, items } = req.body;
  const newItems = [];

  for (const key in items) {
    if (items[key].count > 0) {
      newItems.push({ name: key, count: items[key].count });
    }
  }

  const newOrder = new Order({
    name,
    notes: notes || null,
    items: newItems,
    created: Date.now(),
    updated: Date.now()
  });

  const order = await newOrder.save();

  res.send(order);
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

// PORT
app.listen(5000);
