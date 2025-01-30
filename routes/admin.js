// ./routes/admin.js
// description : this file contains the admin routes

// Importing the required modules
import express from 'express';
const router = express.Router();

// Importing the required middlewares
import { adminLoggedIn } from '../middlewares/authentication.js';

// Importing the required controllers
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
    productEditPostController,
    adminUserController,
    adminUserEditGetController,
    adminUserEditPostController,
    adminUserDeleteController,
    adminOrderController
} from '../controllers/admin.js';

// import the validation middlewares
import { 
    loginErrorArray, 
    signupErrorArray
} from '../middlewares/validation.js';

// Admin Routes
router.get("/admin/login",adminLoginGetController);
router.get("/admin/signup",adminSignupGetController);
router.post("/admin/login", loginErrorArray, adminLoginPostController);
router.post("/admin/signup", signupErrorArray, adminSignupPostController);
router.get("/admin/dashboard", adminLoggedIn, adminDashboardController);
router.get("/admin/products", adminLoggedIn,adminProductsController);

router.get("/product/new", adminLoggedIn,newProductGetController);
router.post("/product/new", adminLoggedIn,newProductPostController);
router.post("/product/delete/:id", adminLoggedIn,productDeleteController);
router.get("/product/edit/:id", adminLoggedIn,productEditGetController);
router.post("/product/edit/:id", adminLoggedIn,productEditPostController);

router.get("/admin/users", adminLoggedIn,adminUserController);
router.get("/admin/user/edit/:id", adminLoggedIn,adminUserEditGetController);
router.post("/admin/user/edit/:id", adminLoggedIn,adminUserEditPostController);
router.post("/admin/user/delete/:id", adminLoggedIn,adminUserDeleteController);

router.get("/admin/orders", adminLoggedIn,adminOrderController);

// Exporting the router
export default router;