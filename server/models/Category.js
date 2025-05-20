const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Force collection name to match actual MongoDB name
module.exports = mongoose.model('Category', categorySchema, 'category');


