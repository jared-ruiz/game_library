import express from 'express';
import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js'



const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json())

app.use("/api/v1/auth", authRoutes)


console.log("MONGO_URI: ", process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log('Server has started at http://localhost:' + PORT);
    connectDB();
})