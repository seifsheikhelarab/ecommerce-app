import { check, validationResult } from 'express-validator'

export const signupErrorArray = [
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    check('username').isLength({ min: 4 }).withMessage('Username must be at least 3 characters long')

];

export const loginErrorArray = [
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
]