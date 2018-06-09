const express = require('express');

const router = express.Router();

// Load order model
const Order = require('../../models/Order');

// @route GET api/orders/test
// @desc  Tests orders route
router.get('/test', (req, res) =>
  res.json({
    meal1: 'pancakes!'
  })
);

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
