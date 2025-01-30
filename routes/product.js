// ./routes/product.js
// description : this file contains the product routes

// Import express
import express from 'express';
const router = express.Router();

// Import the required controllers
import { 
    productlistController,
    productGetController,
    productSearchController
} from '../controllers/product.js';

// Product Routes
router.get("/productList",productlistController);
router.get("/product/:id",productGetController);
router.get("/search",productSearchController);

// Export router
export default router;