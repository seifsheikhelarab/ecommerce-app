import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ]
});

export default mongoose.model('Order', orderSchema);
