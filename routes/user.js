// ./routes/user.js
// description : this file contains the user routes

// Import express
import express from 'express';
const router = express.Router();

// Import the required controllers
import {
    loginGetController,
    loginPostController,
    signupGetController,
    signupPostController,
    logoutController,
    profileController
} from '../controllers/user.js';

// Import the validation middlewares
import { 
    loginErrorArray, 
    signupErrorArray
} from '../middlewares/validation.js';

// Import the required middlewares
import { userLoggedIn } from '../middlewares/authentication.js';

// User Routes
router.get('/login', loginGetController);
router.post('/login',loginErrorArray , loginPostController);
router.get("/signup", signupGetController);
router.post("/signup", signupErrorArray ,signupPostController);
router.get("/logout", logoutController);
router.get("/profile", userLoggedIn, profileController);

// Export router
export default router;