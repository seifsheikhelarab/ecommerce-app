// ./routes/order.js
// description : this file contains the order routes

// Import express
import express from 'express';
const router = express.Router();

// Import the required middlewares
import { userLoggedIn } from '../middlewares/authentication.js';

// Import the required controllers
import {
    addProductToCartController,
    cartGetController,
    removeFromCartController,
    checkoutGetController,
    checkoutPostController
} from '../controllers/order.js';

// Order Routes
router.post("/product/:id", userLoggedIn ,addProductToCartController);
router.get("/cart", userLoggedIn, cartGetController);
router.post("/cart/:id", userLoggedIn, removeFromCartController);
router.get("/checkout", userLoggedIn,checkoutGetController);
router.post("/checkout", userLoggedIn,checkoutPostController);

// Export router
export default router;