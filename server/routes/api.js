const express = require('express');
const cors = require('cors');
const router = express.Router();
require('dotenv/config');

const submittedItems = []; // Store submitted items globally

router.use(cors());

router.post('/submit-items', (req, res) => {
  const selectedItems = req.body.receipt;

  console.log(selectedItems);

  submittedItems.push(selectedItems); // Save submitted items

  res.json(selectedItems);
});

router.get('/submitted-items', (req, res) => {
  res.json(submittedItems); // Return submitted items 
});

module.exports = router;
