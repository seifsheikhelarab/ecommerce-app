// ,./middlewares/authentication.js
// description : this file contains the authentication middlewares

// User Logged In Middleware
export const userLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).redirect('/error');
    }
};

// Admin Logged In Middleware
export const adminLoggedIn = (req, res, next) => {
    if(req.session.admin) {
        next();
    } else {
        res.status(401).redirect('/error');
    }
};