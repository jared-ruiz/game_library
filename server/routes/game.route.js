import express from 'express';
import { fetchGameDetails, fetchTopTen } from '../controllers/game.controller.js';

const router = express.Router();

router.get('/info', fetchGameDetails)
router.get('/popular_games', fetchTopTen)

export default router;