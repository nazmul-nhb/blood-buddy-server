import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).send({ success: true, users });
    } catch (error) {
        console.error("Getting Users Error: ", error.message);
        res.status(500).send({ success: false, message: error.message || "Internal Server Error!" });
    }
});

router.get('/test', async (req, res) => {
    res.status(200).send({ success: true, message: "Hello! It's Working!" })
})


export default router;