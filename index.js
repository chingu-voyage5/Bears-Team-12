const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Schema
require('./models/Order');
require('./models/Item');
require('./models/Drink');

// MongoDB connection
mongoose.connect('mongodb://localhost/feast');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', error => {
    console.warn('Warning', error);
  });

const Order = mongoose.model('orders');
const Item = mongoose.model('items');
const Drink = mongoose.model('drinks');

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

app.get('/api/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);

  res.send(order);
});

app.post('/api/orders', async (req, res) => {
  const { name, notes, order } = req.body;
  const items = [];

  for (const key in order) {
    if (order[key].count > 0) {
      items.push({
        name: key,
        count: order[key].count,
        price: order[key].price
      });
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

app.put('/api/orders/:orderId', async (req, res) => {
  const { method } = req.body;
  const { orderId } = req.params;
  let newStatus;

  const foundOrder = await Order.findById(orderId);

  if (foundOrder.status < 4) {
    Order.findByIdAndUpdate(
      orderId,
      {
        $inc: { status: 1 }
      },
      { new: true },
      (err, updatedOrder) => {
        res.send(updatedOrder);
      }
    );
  }
});

// Item routes
app.get('/api/items', async (req, res) => {
  const items = await Item.find({});

  res.send(items);
});

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

app.put('/api/items/:itemId', async (req, res) => {
  const { newPrice } = req.body;
  const { itemId } = req.params;

  const newItem = await Item.findByIdAndUpdate(itemId, { price: newPrice });

  res.send(newItem);
});

// Drinks routes
app.get('/api/drinks', async (req, res) => {
  const drinks = await Drink.find({});

  res.send(drinks);
});

app.post('/api/drinks', async (req, res) => {
  const { name, price } = req.body;

  const drink = new Drink({
    name,
    price
  });

  const newDrink = await drink.save();
  res.send(newDrink);
});

// PORT
app.listen(5000, () => console.log('Listening on port 5000'));
