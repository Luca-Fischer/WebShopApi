const mongoose = require('mongoose');

const stockModel = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Size'
  },
  amount: {
    type: Number,
    required: '{PATH} is required!'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Stock', stockModel);
