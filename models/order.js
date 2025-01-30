// ./models/order.js
// description : this file contains the order schema

// Importing the required modules
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Order Schema
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ]
});

// Exporting the model
export default mongoose.model('Order', orderSchema);
