import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js'
import { ENV_VARS } from '../config/envVars.js';

//protect routes before user submits route request. If they are not validated, they will not have access to these features

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies['jwt-game-library']

        if (!token) {
            return res.status(401).json({success: false, message: 'Unauthorized - No Token Provided'})
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if (!decoded) {
            return res(401).json({success: false, message: 'Unauthorized - Invalid Token'})
        }

        const user = await User.findById(decoded.userId).select('-password')

        if (!user) {
            return res(400).json({success: false, message: 'User not found'})
        }

        req.user = user;

        next();
    }
    
    catch (error) {
        console.log("Error in protectRoute Middleware", error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error'})
    }
} 