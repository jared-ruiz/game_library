import express from 'express';
import { fetchGameDetails } from '../controllers/game.controller.js';

const router = express.Router();

router.get('/info', fetchGameDetails)

export default router;