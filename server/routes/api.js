const express = require('express')
const router = express.Router()
require('dotenv/config')

router.post('/submit-items', (req, res) => {
  const selectedItems = req.body.receipt;

  console.log(selectedItems);

  res.json({ message: 'Items submitted successfully' });
});

module.exports = router;