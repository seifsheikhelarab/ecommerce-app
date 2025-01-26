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


// Define user routes
import {
    loginGetController,
    loginPostController,
    signupGetController,
    signupPostController
} from '../controllers/user.js';

router.get('/login', loginGetController);
router.post('/login', loginPostController);
router.get("/signup", signupGetController);
router.post("/signup", signupPostController);

// Define product routes
import { productlistController } from '../controllers/product.js';
router.get("/productlist",productlistController);

// Export router
export default router;