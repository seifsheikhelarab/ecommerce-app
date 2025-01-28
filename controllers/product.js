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

export function newProductGetController(req, res) {
    res.render('./product/newProduct', {
        user: req.session.user, 
        title: 'New Product'
    });
};

export async function newProductPostController(req, res) {
    const { name, description, price, image } = req.body;
    const product = new Product({ 
        name, 
        description,
        price, 
        image : image || './img/noimage.png' });
    await product.save();
    res.redirect('/productList');
};
