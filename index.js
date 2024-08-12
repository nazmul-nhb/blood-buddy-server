import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/bloodDB.js";
import { corsOptions } from "./configs/corsConfig.js";
import authRoutes from "./routes/authentication.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// app.options("", cors(corsOptions));

// middlewares
// TODO: Add corsOptions later
app.use(cors());
app.use(express.json());

// home route
app.get("/", async (req, res) => {
    res.send("Blood Buddy Server is Running!");
});

// routes
app.use('/auth', authRoutes);

// error handler for 404
app.use((req, res, next) => {
    const error = new Error("Requested URL Not Found!");
    error.status = 404;
    next(error);
});

// final error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.status || 500).send({
        success: false,
        message: error.message || "Internal Server Error!",
    });
});

// run the server
app.listen(port, async () => {
    await connectDB();

    console.log(`Blood Buddy is Running on Port: ${port}`);
});