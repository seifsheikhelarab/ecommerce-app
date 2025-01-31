// ./controllers/user.js
// description : this file contains the user controllers

// import models, bcrypt and express-validator
import User from '../models/user.js';
import Order from '../models/order.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

// GET : /login
// Login Get Controller
export function loginGetController(req, res) {
    res.render('./user/login', { user: req.session.user, title: 'Log in' });
};

// POST : /login
// Login Post Controller
export async function loginPostController(req, res) {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const alert = errors.array();
        return res.render('./user/login', { user: req.session.user, title: 'Log in', alert });
    }
    let user = await User.findOne({ email });
    if (!user) {
        return res.render('./user/login', { user: req.session.user, title: 'Log in', alert: [{ msg: 'User not found' }] });
    };
    if (await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect('/');
    } else {
        return res.render('./user/login', { user: req.session.user, title: 'Log in', alert: [{ msg: 'User not found' }] });
    };
};

// GET : /signup
// Signup Get Controller
export function signupGetController(req, res) {
    res.render('./user/signup', { user: req.session.user, title: 'Sign up' });
};

// POST : /signup
// Signup Post Controller
export async function signupPostController(req, res) {
    const { username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array();
        return res.render('./user/signup', { user: req.session.user, title: 'Sign up', alert });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.render('./user/signup', { user: req.session.user, title: 'Sign up', alert: [{ msg: 'Email is already in use' }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error(err);
    }
};

// GET : /logout
// Logout Controller
export function logoutController(req, res) {
    req.session.destroy();
    res.redirect('/');
};

// GET : /profile
// Profile Controller
export async function profileController(req, res) {
    const orders = await Order.find({ user: req.session.user._id });
    res.render('./user/profile', { user: req.session.user, title: 'Profile', orders });
};