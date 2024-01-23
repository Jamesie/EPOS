const express = require('express');
const router = express.Router();

router.post('/submit-items', (req, res) => {
  const selectedItems = req.body.selectedItems;

  console.log(selectedItems);

  res.json({ message: 'Items submitted successfully' });
});

module.exports = router;