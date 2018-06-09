const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const orders = require('./routes/api/orders');

const app = express();
const mongoDB = 'mongodb://localhost/orderApp';

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(mongoDB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Use routes
app.use('/api/orders', orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
