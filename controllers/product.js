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
        admin: req.session.admin, 
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

export async function productGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./product/singleProduct', {
        product,
        user: req.session.user, 
        title: `${product.name} - E-commerce app`
    });
};

export async function productDeleteController(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/productList');
}

export async function productEditGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./product/editProduct', {
        product,
        admin: req.session.admin, 
        title: `Edit ${product.name} - E-commerce app`
    });
}

export async function productEditPostController(req, res) {
    const { name, description, price, image } = req.body
    const product = await Product.findById(req.params.id);
    if(name) product.name = name;
    if(description) product.description = description;
    if(price) product.price = price;
    if(image) product.image = image;
    await product.save();
    res.redirect('/productList');
}