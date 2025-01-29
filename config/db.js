import mongoose from 'mongoose';

// Connect to MongoDB Server
export function databaseSetup() {
    return mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log(`Connected to MongoDB Server on ${process.env.MONGODB_URI}`))
        .catch(err => console.error(err));
}