import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "You Must Provide Your Name!"],
    },
    email: {
        type: String,
        required: [true, "You Must Provide Your Email!"],
        unique: true,
    },
    avatar: {
        type: String,
        required: [true, "You Must Provide Your Avatar!"],
    },
    bloodGroup: {
        type: String,
        required: [true, "You Must Provide Your Blood Group!"],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    district: {
        type: String,
        required: [true, "You Must Provide Your District!"],
    },
    upazila: {
        type: String,
        required: [true, "You Must Provide Your Upazila!"],
    },
    password: {
        type: String,
        required: [true, "You Must Provide Your Password!"],
    },
    status: {
        type: String,
        enum: ['active', 'blocked'],
        default: "active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export const User = model("User", userSchema);
