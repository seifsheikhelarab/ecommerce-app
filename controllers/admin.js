// ./controllers/admin.js
// description : this file contains the admin controllers

// Import models, bcrypt and express-validator
import Product from "../models/product.js";
import User from "../models/user.js";
import Admin from "../models/admin.js";
import Order from "../models/order.js";
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

//GET : /admin/login
//Admin Login Get Controller
export function adminLoginGetController(req, res) {
    res.render('admin/login', { admin: req.session.admin, title: 'Admin Login' });
};

//GET : /admin/signup
//Admin Signup Get Controller
export function adminSignupGetController(req, res) {
    res.render('admin/signup', { admin: req.session.admin, title: 'Admin Signup'});
};

//POST : /admin/login
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

//POST : /admin/signup
//Admin Signup Post Controller
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

//GET : /admin/dashboard
//Admin Dashboard Controller
export async function adminDashboardController(req, res) {
    const products = await Product.find();
    const users = await User.find();
    const orders = await Order.find();
    res.render('admin/dashboard', { 
        admin: req.session.admin, 
        products, 
        users,
        orders,
        title: 'Admin Dashboard'});
};

//GET : /admin/products
//Admin Products Controller
export async function adminProductsController(req, res) {
    const products = await Product.find();
    res.render('admin/products', { 
        admin: req.session.admin, 
        products,
        title: 'Admin Products'});
};

//GET : /product/new
//New Product Get Controller
export function newProductGetController(req, res) {
    res.render('./admin/newProduct', {
        admin: req.session.admin, 
        title: 'New Product'
    });
};

//POST : /product/new
//New Product Post Controller
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

//POST : /product/delete/:id
//Product Delete Controller
export async function productDeleteController(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
}

//GET : /product/edit/:id
//Product Edit Get Controller
export async function productEditGetController(req, res) {
    const product = await Product.findById(req.params.id);
    res.render('./admin/editProduct', {
        product,
        admin: req.session.admin, 
        title: `Edit ${product.name} - E-commerce app`
    });
}

//POST : /product/edit/:id
//Product Edit Post Controller
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

//GET : /admin/users
//Admin Users Controller
export async function adminUserController(req, res) {
    const users = await User.find();
    res.render('admin/users', { 
        admin: req.session.admin, 
        users,
        title: 'Admin Users'});
};

//GET : /admin/user/edit/:id
//Admin User Edit Get Controller
export async function adminUserEditGetController(req, res) {
    const user = await User.findById(req.params.id);
    res.render('./admin/editUser', {
        user,
        admin: req.session.admin, 
        title: `Edit ${user.username} - E-commerce app`
    });
};

//POST : /admin/user/edit/:id
//Admin User Edit Post Controller
export async function adminUserEditPostController(req, res) {
    const { username, email, password } = req.body;
    const user = await User.findById(req.params.id);
    if(username) user.username = username;
    if(email) user.email = email;
    if(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
    }
    await user.save();
    res.redirect('/admin/users');
};

//POST : /admin/user/delete/:id
//Admin User Delete Controller
export async function adminUserDeleteController(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/admin/users');
};

//GET : /admin/orders
//Admin Orders Controller
export async function adminOrderController(req, res) {
    const orders = await Order.find();
    res.render('admin/orders', { 
        admin: req.session.admin, 
        orders,
        title: 'Admin Orders'});
};