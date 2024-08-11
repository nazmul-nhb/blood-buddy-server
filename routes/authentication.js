import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../schemas/userSchema.js";

const router = express.Router();

// register a user
router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        const rawPassword = user.password;

        // generate hashed password
        const hashedPassword = await bcrypt.hash(rawPassword, 13);
        
        user.password = hashedPassword;

        const newUser = new User(user);

        const result = await newUser.save(newUser);
        return res.status(201).send({
            success: true,
            message: "Account Created Successfully!", user: result
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({
                success: false,
                message: "This Email is Already Registered!",
            });
        } else {
            res.status(500).send({ success: false, message: error.message || "Registration Failed!" });
        }
        console.error("Registration Error: ", error);
    }
});


export default router;