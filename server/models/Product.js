const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    price: {
        type: Number,
        required: '{PATH} is required!'
    },
    logo: {
        type: String,
        default: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productModel);
