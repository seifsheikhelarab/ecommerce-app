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
    signupPostController,
    logoutController,
    profileController
} from '../controllers/user.js';

router.get('/login', loginGetController);
router.post('/login', loginPostController);
router.get("/signup", signupGetController);
router.post("/signup", signupPostController);
router.get("/logout", logoutController);
router.get("/profile", profileController);

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

// Export router
export default router;