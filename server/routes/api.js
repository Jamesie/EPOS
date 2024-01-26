const express = require('express');
const cors = require('cors');
const router = express.Router();
const Receipt = require('../models/receiptSchema');
require('dotenv/config');

router.use(cors());

router.post('/submit-items', async (req, res) => {
  try {
    const receiptData = req.body.receipt[0]; 

    const flattenedItems = receiptData.items.flat();

    const newReceipt = new Receipt({
      total: receiptData.Total,
      checkoutType: receiptData.CheckoutType,
      orderedItems: flattenedItems
    });

    await newReceipt.save();

    console.log('Receipt saved successfully:', newReceipt);
    res.json(newReceipt);
  } catch (error) {
    console.error('Error saving receipt:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/submitted-items', async (req, res) => {
  try {
    const data = await Receipt.find().sort({ orderDate: -1 }).limit(1);
    res.json(data);
  } catch (error) {
    console.error('Error fetching menu data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
