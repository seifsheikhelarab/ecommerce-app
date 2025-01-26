// Import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Import Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const ejs = require('ejs');

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(compression());

// Serve Static Files
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Connected to MongoDB Server on ${process.env.MONGODB_URI}`);
}).catch((err) => {
    console.log(err);
});

// Import Main Routes
const mainRouter = require('./routes/main.js');
app.use('/',mainRouter);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
