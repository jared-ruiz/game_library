import express from 'express';
import { fetchGameDetails, fetchRandomGames } from '../controllers/game.controller.js';

const router = express.Router();

router.get('/info', fetchGameDetails)
router.get('/games', fetchRandomGames)

export default router;