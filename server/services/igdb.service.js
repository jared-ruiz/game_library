import { ENV_VARS } from "../config/envVars.js"
import axios from "axios";

// This API requires an active Twitch Token before every call. I will make sure this function checks the lifespan of the token before providing it and that will allow for our future api calls to go out successfully

let cachedToken = null;
let tokenExpiration = 0;

export async function getAccessToken() {
    const getCurrentTime = Math.floor(Date.now() / 1000);

    if (cachedToken && getCurrentTime < tokenExpiration) {
        return cachedToken;
    }

    try {
        const response = await axios.post(`https://id.twitch.tv/oauth2/token`, null, {
            params: {
                client_id: ENV_VARS.LIB_ID,
                client_secret: ENV_VARS.LIB_SECRET,
                grant_type: 'client_credentials'
            }
        })

        cachedToken = response.data.access_token;
        tokenExpiration = getCurrentTime + response.data.expires_in;

        return cachedToken;

    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw new Error('Failed to authenticate with Twitch API');
    }
}


