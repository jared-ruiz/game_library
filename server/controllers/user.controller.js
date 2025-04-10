import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';
import { getAccessToken } from '../services/igdb.service.js';
import { User } from '../models/user.model.js';



export async function addGameToLibrary(req,res) {
    const user = req.user;
    const game = req.body.game;

    if (!game || !game.id) {
        return res.status(400).json({success: false, message: "Game data is missing!"});
    }

    const duplicateCheck = user.library.find(vg => vg.id === game.id);
    if (duplicateCheck) {
        return res.status(409).json({ success: false, message: "Game already exists in library!"});

    }

    user.library.push(game);
    await user.save();

    res.json({success: true, message: "Game added to your library!", library: user.library});
}

export async function getUserLibrary (req, res) {
    const userId = req.user.id;
    
    try {
        const user = await User.findById(userId).select("library");

        if (!user) {
            return res.status(404).json({success: false, message: "User not found!"});
        }

        res.json({success: true, library: user.library })
        
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error", error: error.message})
    }
}
