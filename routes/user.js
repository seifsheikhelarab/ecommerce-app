// Initialize express router
import express from 'express';
const router = express.Router();

// Define user routes
import {
    loginGetController,
    loginPostController,
    signupGetController,
    signupPostController,
    logoutController,
    profileController
} from '../controllers/user.js';

import { 
    loginErrorArray, 
    signupErrorArray
} from '../middlewares/validation.js';

router.get('/login', loginGetController);
router.post('/login',loginErrorArray , loginPostController);
router.get("/signup", signupGetController);
router.post("/signup", signupErrorArray ,signupPostController);
router.get("/logout", logoutController);
router.get("/profile", profileController);

export default router;