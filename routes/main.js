// Initialize express router
const express = require('express');
const router = express.Router();

// Define a main route
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/login', (req, res) => {
    res.render('./user/login');
});

router.get("/signup", (req, res) => {
    res.render('./user/signup');
});

router.get("/productlist", (req, res) => {
    res.render('./product/productlist',{products:[]});
});

// Export router
module.exports = router;
