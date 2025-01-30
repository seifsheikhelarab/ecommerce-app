// ./models/admin.js
// description : this file contains the admin schema

// Importing the required modules
import { Schema, model } from 'mongoose';

// Admin Schema
const adminSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Exporting the model
export default model('Admin', adminSchema);