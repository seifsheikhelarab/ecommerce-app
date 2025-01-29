// Initialize express router
import express from 'express';
const router = express.Router();

// Define product routes
import { 
    productlistController,
    newProductGetController,
    newProductPostController,
    productGetController,
    productDeleteController,
    productEditGetController,
    productEditPostController
} from '../controllers/product.js';
router.get("/productList",productlistController);
router.get("/product/new",newProductGetController);
router.post("/product/new",newProductPostController);
router.get("/product/:id",productGetController);
router.post("/product/delete/:id",productDeleteController);
router.get("/product/edit/:id",productEditGetController);
router.post("/product/edit/:id",productEditPostController);

export default router;