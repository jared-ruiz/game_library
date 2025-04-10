import express from 'express';
import authRoutes from './routes/auth.route.js';
import gameRoutes from './routes/game.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser';
import { protectRoute } from './middleware/protectRoute.js';
import searchRoutes from './routes/searchRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/game", protectRoute, gameRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);
app.use("/api/v1/user", protectRoute, userRoutes);


console.log("MONGO_URI: ", process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log('Server has started at http://localhost:' + PORT);
    connectDB();
})

