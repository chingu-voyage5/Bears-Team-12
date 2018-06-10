const express = require('express');

const router = express.Router();

// Load order model
const Order = require('../../models/Order');

// @route POST api/orders/order
// @ desc add new order route
router.post('/order', (req, res) => {
  const newOrder = new Order({
    meal1: req.body.meal1
  });

  newOrder
    .save()
    .then(order => res.json(order))
    .catch(err => console.log(err));
});

module.exports = router;
