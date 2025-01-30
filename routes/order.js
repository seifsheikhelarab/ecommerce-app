// Initialize express router
import express from 'express';
const router = express.Router();

import {
    addProductToCartController,
    cartGetController
} from '../controllers/order.js';

router.post("/product/:id", addProductToCartController);
router.get("/cart", cartGetController);


export default router;