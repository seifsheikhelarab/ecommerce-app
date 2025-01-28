import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function loginGetController(req, res) {
    res.render('./user/login');
};

export async function loginPostController(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    };
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    };
    if (await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    };
};

export function signupGetController(req, res) {
    res.render('./user/signup');
};

export async function signupPostController(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
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
