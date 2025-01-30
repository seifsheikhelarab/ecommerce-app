// Initialize express router
import express from 'express';
const router = express.Router();

// Define Admin routes
import {
    adminLoginGetController,
    adminSignupGetController,
    adminLoginPostController,
    adminSignupPostController,
    adminDashboardController,
    adminProductsController,
    newProductGetController,
    newProductPostController,
    productDeleteController,
    productEditGetController,
    productEditPostController
} from '../controllers/admin.js';

import { 
    loginErrorArray, 
    signupErrorArray
} from '../middlewares/validation.js';

router.get("/admin/login",adminLoginGetController);
router.get("/admin/signup",adminSignupGetController);
router.post("/admin/login", loginErrorArray, adminLoginPostController);
router.post("/admin/signup", signupErrorArray, adminSignupPostController);
router.get("/admin/dashboard",adminDashboardController);
router.get("/admin/products",adminProductsController);

router.get("/product/new",newProductGetController);
router.post("/product/new",newProductPostController);
router.post("/product/delete/:id",productDeleteController);
router.get("/product/edit/:id",productEditGetController);
router.post("/product/edit/:id",productEditPostController);


export default router;