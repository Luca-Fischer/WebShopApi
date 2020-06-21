const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        required: '{PATH} is required!'
    },
    password: {
        type: String,
        required: '{PATH} is required!'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userModel);
