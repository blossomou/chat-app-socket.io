import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('mongoDB connection error: ', error);
  }
};
export default connectDB;
