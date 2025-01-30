// ./models/product.js
// description : this file contains the product schema

// Importing the required modules
import mongoose from 'mongoose';

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String
});

// Exporting the model
export default mongoose.model('Product', productSchema);
