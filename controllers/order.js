import express from 'express';
import Order from '../models/order.js';
import Product from '../models/product.js';
import { validationResult } from 'express-validator';


export async function addProductToCartController(req, res) {
    const productId = req.params.id;
    const product = await Product.findById(productId);

        return res.render('./product/singleProduct', {
            product,
            user: req.session.user, 
            title: `${product.name} - E-commerce app`,
            alert: [{ msg: 'Added to Cart!!' }]
        })

    let cart = req.session.cart || [];
    const index = cart.findIndex(item => item._id.toString() === productId);
    if (index === -1) {
        cart.push({...product._doc, quantity: 1});
    } else {
        cart[index].quantity += 1;
    }
    req.session.cart = cart;
    res.redirect(`/product/${productId}`);
};

export async function cartGetController(req, res) {
    const cart = req.session.cart || [];
    res.render('./order/cart', {
        cart,
        user: req.session.user,
        title: 'Cart'
    });
};