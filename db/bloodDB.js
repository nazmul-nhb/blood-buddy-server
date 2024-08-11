import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURI = process.env.MONGO_STRING;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Blood DB is Connected!");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An Unknown Error Occurred!");
        }
        console.log("DB is Not Connected!");
        process.exit(1);
    }
};
