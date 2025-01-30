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
    adminProductsController
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

export default router;