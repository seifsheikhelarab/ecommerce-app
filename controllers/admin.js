import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";

//Admin Login Get Controller
export function adminLoginGetController(req, res) {
    res.render('admin/login', { admin: req.session.admin, title: 'Admin Login' });
};

//Admin Signup Get Controller
export function adminSignupGetController(req, res) {
    res.render('admin/signup', { admin: req.session.admin, title: 'Admin Signup'});
};

//Admin Login Post Controller
export function adminLoginPostController(req, res) {
    res.redirect('/admin/dashboard');
};

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