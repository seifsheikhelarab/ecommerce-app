// ./config/db.js
// description : this file contains the database setup function

import mongoose from 'mongoose';

export function databaseSetup() {
    return mongoose.connect(process.env.MONGODB_URI,
        {
            serverSelectionTimeoutMS: 5000
        }
    )
        .then(() => console.log(`Connected to MongoDB Server on ${process.env.MONGODB_URI}`))
        .catch(err => console.error(err));
}