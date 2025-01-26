import express from 'express';
import User from '../models/user.js';

export function loginGetController(req, res) {
    res.render('./user/login');
};

export function loginPostController(req, res) {
    res.send('heyy');
};

export function signupGetController(req, res) {
    res.render('./user/signup');
};

export function signupPostController(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    }
    const user = new User({ username, email, password });
    user.save().then(() => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
}