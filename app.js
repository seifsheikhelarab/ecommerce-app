// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

// Import Dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(compression());

// Serve Static Files
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Connected to MongoDB Server on ${process.env.MONGODB_URI}`);
}).catch((err) => {
    console.log(err);
});

// Import Main Routes
import { default as mainRouter } from './routes/main.js';
app.use('/', mainRouter);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
