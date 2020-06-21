const mongoose = require('mongoose');

const orderModel = mongoose.Schema({
    date: {
        type: Date,
        required: '{PATH} is required!'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderModel);
