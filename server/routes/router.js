const express = require('express')
const router = express.Router()
require('dotenv/config')
const Menu = require('../models/menuSchema')

router.get('/menu', async (req, res) => {
  try {
    const data = await Menu.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching menu data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;