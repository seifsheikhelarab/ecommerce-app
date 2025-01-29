// Initialize express router
import express from 'express';
const router = express.Router();

// Define main routes
import {
    indexController,
    aboutController
} from '../controllers/main.js';

router.get('/', indexController);
router.get('/about', aboutController);

// Export router
export default router;