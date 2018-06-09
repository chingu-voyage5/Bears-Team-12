const express = require('express');

const router = express.Router();

router.get('/test', (req, res) =>
  res.json({
    meal1: 'pancakes!',
    meal2: 'bacon'
  })
);

module.exports = router;
