const mongoose = require('mongoose');

const brandModel = mongoose.Schema({
  name: {
    type: String,
    required: '{PATH} is required!'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Brand', brandModel);
