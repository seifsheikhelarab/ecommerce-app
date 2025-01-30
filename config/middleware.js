//./config/middleware.js
// description : this file contains the middleware setup function

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { check, validationResult } from 'express-validator'
import compression from 'compression';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import morgan from 'morgan';


// Middlewares for the application
export function middlewareSetup(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ credentials: true }));
    app.use(cookieParser());
    app.use(compression());
    app.use(morgan('dev'));
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
            collectionName: 'sessions'
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: false
        }
    }));
};