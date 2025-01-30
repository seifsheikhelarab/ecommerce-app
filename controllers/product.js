import express from 'express';
import Product from '../models/product.js';

export async function productlistController(req, res) {
    const products = await Product.find();
    res.render('./product/productlist', {
        products,
        user: req.session.user, 
        title: 'Product list'
    });
};


export async function productGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./product/singleProduct', {
        product,
        user: req.session.user, 
        title: `${product.name} - E-commerce app`
    });
};

