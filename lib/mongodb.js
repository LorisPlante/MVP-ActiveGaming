// lib/mongodb.js

import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MongoDB URI is not defined in environment variables');
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MONGODB');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
};
