const mongoose = require('mongoose');

const sizeModel = mongoose.Schema({
  name: {
    type: String,
    required: '{PATH} is required!'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Size', sizeModel);
