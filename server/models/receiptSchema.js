const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptSchema = new Schema({
    total: {type: String, required: true},
    checkoutType: {type: String, required: true},
    orderDate: {type: Date, default:Date.now},
    orderedItems: [{ type: String, required: true }]
})

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;

