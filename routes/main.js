// ./routes/main.js
// description : this file contains the main routes

// Import express
import express from 'express';
const router = express.Router();

// Import the required controllers
import {
    indexController,
    aboutController,
    errorController
} from '../controllers/main.js';

// Main Routes
router.get('/', indexController);
router.get('/about', aboutController);
router.get('/error', errorController);

// Export router
export default router;