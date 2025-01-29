import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

export function loginGetController(req, res) {
    res.render('./user/login', { user: req.session.user, title: 'Log in' });
};

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

export function signupGetController(req, res) {
    res.render('./user/signup', { user: req.session.user, title: 'Sign up' });
};

export async function signupPostController(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const alert = errors.array();
        return res.render('./user/signup', { user: req.session.user, title: 'Sign up', alert });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
    }
}

export function logoutController(req, res) {
    req.session.destroy();
    res.redirect('/');
};

export function profileController(req, res) {
    res.render('./user/profile', { user: req.session.user, title: 'Profile' });
};