import mongoose from "mongoose";

//user schema for db
const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true, 
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    library: {
        type: Array,
        default: []
    }
})

export const User = mongoose.model('User', userSchema);