// ./middlewares/validation.js
// description : this file contains the validation middlewares

// Import the express-validator
import { check, validationResult } from 'express-validator'

// Signup Error Array
export const signupErrorArray = [
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    check('username').isLength({ min: 4 }).withMessage('Username must be at least 3 characters long')

];

// Login Error Array
export const loginErrorArray = [
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
]