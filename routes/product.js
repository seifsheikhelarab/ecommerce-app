// Initialize express router
import express from 'express';
const router = express.Router();

// Define product routes
import { 
    productlistController,
    productGetController,
} from '../controllers/product.js';

router.get("/productList",productlistController);
router.get("/product/:id",productGetController);

export default router;