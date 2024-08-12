import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURI = process.env.MONGO_STRING;

export const connectDB = async () => {
    if (!mongoURI) {
        console.error("Provide A MongoDB Connection String!");
        return;
    }

    try {
        await mongoose.connect(mongoURI);
        
        console.log("Blood DB is Connected!");
    } catch (error) {
        console.log("DB is Not Connected!");
        if (error instanceof Error) {
            console.error(`DB Error: ${error.message}`);
        } else {
            console.error("An Unknown Error Occurred!");
        }

        // process.exit(1);
    }
};
