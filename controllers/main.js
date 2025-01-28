// Purpose: To handle the main routes of the application.
import express from 'express';

// Contoller to render the index view
export function indexController(req, res) {
    res.render('index', { user: req.session.user, title: 'Home' });
};

// Contoller to render the about view
export function aboutController(req, res) {
    res.render('about', { user: req.session.user, title: 'About' });
};
