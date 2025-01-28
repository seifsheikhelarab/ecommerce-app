import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String
});

export default mongoose.model('Product', productSchema);