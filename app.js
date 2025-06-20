// app.js
// description : this file contains the main server setup

// Import dotenv for environment variables
import dotenv from 'dotenv';
dotenv.config();

// Import Express
import express from 'express';
import ejs from "ejs";

// Import Configurations
import { databaseSetup } from './config/db.js';
import { middlewareSetup } from './config/middleware.js';
import { routesSetup } from './config/routes.js';

// Initialize Express
const app = express();

// Initialize Middleware
middlewareSetup(app);

// Initialize Database
databaseSetup();

// Initialize Routes
routesSetup(app);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });