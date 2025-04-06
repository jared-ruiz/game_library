import axios from "axios";
import { getAccessToken } from "../services/igdb.service.js";
import { ENV_VARS } from "../config/envVars.js";

export async function searchGame(req, res) {
    //user query for search
    // const gameName = req.body.name;
    const { query } = req.params;

    if (!query) {
        return res.status(400).json({ success: false, message: 'Game name is required'});
    }

    try {
        const token = await getAccessToken();

        const response = await axios.post(
            "https://api.igdb.com/v4/search",
            `fields company,description,game,name,platform,published_at; search "${query}";`,
            {
                headers: {
                    'Client-ID': ENV_VARS.LIB_ID,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'text/plain'
                }
            }
        )


        const game = response.data;

        if (game.length === 0) {
            return res.status(404).send(null);
        }

        res.json({success: 'true', content: game});

    } catch (error) {
        console.error('Error fetching game data:', error.response?.data || error.message);
        res.status(500).json({error: 'Failed to fetch game data.'});
    }
}