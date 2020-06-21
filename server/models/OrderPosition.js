const mongoose = require('mongoose');

const orderPositionModel = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
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

module.exports = mongoose.model('OrderPosition', orderPositionModel);
