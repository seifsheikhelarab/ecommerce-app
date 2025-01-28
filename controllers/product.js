import express from 'express';

export function productlistController(req, res) {
    res.render('./product/productlist', {
        products: [],
        user: req.session.user, 
        title: 'Product list'
    });
};