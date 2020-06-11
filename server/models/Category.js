const mongoose = require('mongoose');

const categoryModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categoryModel);
