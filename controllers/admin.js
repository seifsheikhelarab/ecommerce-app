import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
import Admin from "../models/admin.js";
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

//Admin Login Get Controller
export function adminLoginGetController(req, res) {
    res.render('admin/login', { admin: req.session.admin, title: 'Admin Login' });
};

//Admin Signup Get Controller
export function adminSignupGetController(req, res) {
    res.render('admin/signup', { admin: req.session.admin, title: 'Admin Signup'});
};

//Admin Login Post Controller
export async function adminLoginPostController(req, res) {
    const { email, password } = req.body;
    const errors = validationResult(req);
        if(!errors.isEmpty()) {
            const alert = errors.array();
            return res.render('./admin/login', { admin: req.session.admin, title: 'Log in', alert });
        };
        let admin = await Admin.findOne({ email });
            if (!admin) {
                return res.render('./admin/login', { admin: req.session.user, title: 'Log in', alert: [{ msg: 'Unauthorized' }] });
            };
            if (await bcrypt.compare(password, admin.password)) {
                req.session.admin = admin;
                res.redirect('/admin/dashboard');
            } else {
                return res.render('./admin/login', { admin: req.session.admin, title: 'Log in', alert: [{ msg: 'Unauthorized' }] });
            };
};

export async function adminSignupPostController(req, res) {
    const { username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        return res.render('./admin/signup', { admin: req.session.admin, title: 'Sign up', alert });
    }

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.render('./admin/signup', { admin: req.session.admin, title: 'Sign up', alert: [{ msg: 'Email is already in use' }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ username, email, password: hashedPassword });
        await admin.save();
        res.redirect('/admin/dashboard');
    } catch (err) {
        console.error(err);
    }
}
//Admin Dashboard Controller
export async function adminDashboardController(req, res) {
    const products = await Product.find();
    const users = await User.find();
    res.render('admin/dashboard', { 
        admin: req.session.admin, 
        products, 
        users,
        title: 'Admin Dashboard'});
};

export async function adminProductsController(req, res) {
    const products = await Product.find();
    res.render('admin/products', { 
        admin: req.session.admin, 
        products,
        title: 'Admin Products'});
};

export function newProductGetController(req, res) {
    res.render('./admin/newProduct', {
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
    res.redirect('/admin/products');
};

export async function productDeleteController(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
}

export async function productEditGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./admin/editProduct', {
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
    res.redirect('/admin/products');
}