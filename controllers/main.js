// ./controllers/main.js
// description : this file contains the main controllers

// GET : /
// Index Controller
export function indexController(req, res) {
    res.render('index', { user: req.session.user, title: 'Home' });
};

// GET : /about
// About Controller
export function aboutController(req, res) {
    res.render('about', { user: req.session.user, title: 'About' });
};

// GET : /error
// Error Controller
export function errorController(req, res) {
    res.render('error', { user: req.session.user, title: 'Error' });
};