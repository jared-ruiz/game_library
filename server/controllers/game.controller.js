import { getAccessToken } from "../services/igdb.service.js";
import { ENV_VARS } from "../config/envVars.js";
import axios from "axios";

//get game info
export async function fetchGameDetails(req, res) {
    const gameName = req.query.name;

    if (!gameName) {
        return res.status(400).json({ success: false, message: "Game name is required"});
    }

    try {
        const token = await getAccessToken();

        const response = await axios.post(
            'https://api.igdb.com/v4/games', 
            `fields name, summary, first_release_date, rating, cover.url; search "${gameName}"; limit 1;`,
            {
                headers: {
                    'Client-ID': ENV_VARS.LIB_ID,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'text/plain'
                }
            }
        );

        const games = response.data;
        
        if (games.length === 0) {
            return res.status(404).json({ message: 'Game not found.' });
        }

        res.json({success: true, content: games[0]});
    } catch (error) {
        console.error('Error fetching game data:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch game data.' });
    }
}
