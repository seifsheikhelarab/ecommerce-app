// Import Dotenv for Enviroment Variables
import dotenv from 'dotenv';
dotenv.config();

// Import Dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import morgan from 'morgan';

// Initialize Express
const app = express();

// Middleware
// bodyParser.json() parses incoming requests with JSON payloads and urlencoded payloads
// cors() enables Cross-origin resource sharing
// cookieParser() parses cookies attached to the client request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(compression());
app.use(morgan('dev'));

// Serve Static Files from the "public" directory and set the view engine to EJS
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB Server
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Connected to MongoDB Server on ${process.env.MONGODB_URI}`);
}).catch((err) => {
    console.log(err);
});

// Express Session Middleware
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

// Import Main Routes from routes/main.js
import { default as mainRouter } from './routes/main.js';
app.use('/', mainRouter);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
