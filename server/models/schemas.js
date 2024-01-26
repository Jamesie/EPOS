const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuItemSchema = new Schema({
  category: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const receiptSchema = new Schema({
  total: {type: String, required: true},
  checkoutType: {type: String, required: true},
  orderDate: {type: Date, default:Date.now},
  orderedItems: [
    {
      
    }
  ]
})
  
const Menu = mongoose.model('Menu', menuItemSchema);
  
module.exports = Menu;