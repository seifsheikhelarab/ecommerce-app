// ./controllers/product.js
// description : this file contains the product controllers

// import models
import Product from '../models/product.js';

// GET : /productlist
// Product List Controller
export async function productlistController(req, res) {
    const { page = 1, limit = 5 } = req.query;
    const products = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
    const pages = Math.ceil(await Product.countDocuments() / limit);
    res.render('./product/productlist', {
        products,
        user: req.session.user, 
        title: 'Product list',
        page, 
        pages
    });
};

// GET : /product/:id
// Product Get Controller
export async function productGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./product/singleProduct', {
        product,
        user: req.session.user, 
        title: `${product.name} - E-commerce app`
    });
};

export async function productSearchController(req, res) {
    const products = await Product.find({name: new RegExp(req.query.q, 'i')});
    res.render('./product/search', {
        products,
        user: req.session.user, 
        title: 'Product list'
    });
};