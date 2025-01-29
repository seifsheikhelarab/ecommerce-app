// Initialize express router
import express from 'express';
const router = express.Router();

// Define Admin routes
import {
    adminLoginGetController,
    adminSignupGetController,
    adminLoginPostController,
    adminDashboardController
} from '../controllers/admin.js';
router.get("/admin/login",adminLoginGetController);
router.get("/admin/signup",adminSignupGetController);
router.post("/admin/login",adminLoginPostController);
router.get("/admin/dashboard",adminDashboardController);

export default router;