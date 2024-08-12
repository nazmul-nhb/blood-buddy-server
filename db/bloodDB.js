import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURI = process.env.MONGO_STRING;

export const connectDB = async () => {
    if (!mongoURI) {
        console.error("Provide A MongoDB Connection String!");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURI);
        console.log("Blood DB is Connected!");
    } catch (error) {
        console.error(`DB Error: ${error.message || "An Unknown Error Occurred!"}`);
        process.exit(1);
    }
};
