import mongoose from "mongoose";
import { config } from 'dotenv';
config();
const connectDB = async () => {
    try {
        const dbLink = process.env.MONGO_URI;
        if (!dbLink) {
            throw new Error("Database connection string (MONGO_URI) is not defined in the environment variables.");
        }

        await mongoose.connect(dbLink);
        console.log('DB Connected successfully.');
    } catch (err) {
        console.error(`Fail to connect DB.........${err}`);
        throw err;
    }
};

export default connectDB;