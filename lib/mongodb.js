import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://anaismlhpro:xsXgWDi52I2jL5VD@projet.yipyngl.mongodb.net/Google_Auth');
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};