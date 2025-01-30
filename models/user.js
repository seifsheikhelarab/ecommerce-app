// ./models/user.js
// description : this file contains the user schema

// Importing the required modules
import { Schema, model } from 'mongoose';

// User Schema
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Exporting the model
export default model('User', userSchema);