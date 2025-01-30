// ./controllers/order.js
// description : this file contains the order controllers

// import models and express-validator
import Order from '../models/order.js';
import Product from '../models/product.js';
import { validationResult } from 'express-validator';

// POST : /product/:id/
// Add Product to Cart Controller
export async function addProductToCartController(req, res) {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        return res.render('./product/singleProduct', {
            product,
            user: req.session.user, 
            title: `${product.name} - E-commerce app`,
            alert: [{ msg: 'Product not found' }]
        })
    }
    let cart = req.session.cart || [];
    const index = cart.findIndex(item => item._id.toString() === productId);
    if (index === -1) {
        cart.push({...product._doc, quantity: 1});
    } else {
        cart[index].quantity += 1;
    }
    req.session.cart = cart;
    return res.render('./product/singleProduct', {
        product,
        user: req.session.user, 
        title: `${product.name} - E-commerce app`,
        alert: [{ msg: 'Added to Cart!!' }]
    })
};

// GET : /cart
// Cart Get Controller
export async function cartGetController(req, res) {
    const cart = req.session.cart || [];
    res.render('./order/cart', {
        cart,
        user: req.session.user,
        title: 'Cart'
    });
};

// POST : /cart/:id
// Remove from Cart Controller
export async function removeFromCartController(req, res) {
    const productId = req.params.id;
    const cart = req.session.cart || [];
    const index = cart.findIndex(item => item._id.toString() === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    req.session.cart = cart;
    res.redirect('/cart');
}

// GET : /checkout
// Checkout Get Controller
export async function checkoutGetController(req, res) {
    const cart = req.session.cart || [];
    res.render('./order/checkout', {
        cart,
        user: req.session.user,
        title: 'Checkout'
    });
}

// POST : /checkout
// Checkout Post Controller
export async function checkoutPostController(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('./order/checkout', {
            cart: req.session.cart || [],
            user: req.session.user,
            title: 'Checkout',
            alert: errors.array()
        });
    }
    const cart = req.session.cart || [];
    const order = new Order({
        products: cart.map(item => ({
            product: {
                _id: item._id,
                name: item.name
            },
            quantity: item.quantity
        })),
        user: req.session.user._id
    });
    await order.save();
    req.session.cart = [];
    res.render('./order/complete', {
        user: req.session.user,
        title: 'Order Success'
    });
}