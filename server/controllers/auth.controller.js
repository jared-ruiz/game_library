import { User } from "../models/user.model.js";

export async function signup (req, res) {
    try {
        const {email, password, username } = req.body

        if (!email || !password || !username) {
            return res.status(400).json({success: false, message: "All fields are required"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({success: false, message: "Invalid email"})
        }

        if (password.length < 6) {
            return res.status(400).json({success: false, message: "Password must be at least 6 characters"})
        }

        const existingUserByEmail = await User.findOne({email: email}) 

        if (existingUserByEmail) {
            return res.status(400).json({success: false, message: "Email already exists"})
        }

        const existingUserByUsername = await User.findOne({username: username})

        if (existingUserByUsername) {
            return res.status(400).json({success: false, message: "Username already exists"})
        }

        const newUser = new User({
            email,
            password,
            username
        })

        await newUser.save();

        res.status(201).json({ 
            success: true,
            user: {
                ...newUser._doc,
                password: ""
            }
        })

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export async function login(req, res) {
    res.send("Login Route");
}

export async function logout(req, res) {
    res.send("Logout Route")
}