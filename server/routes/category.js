const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // model bạn tạo

// GET all products
// routes/category.js
router.get('/', async (req, res) => {
    console.log("✅ Hit /api/categories route");
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
