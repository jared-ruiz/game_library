import express from 'express';
import { searchGame } from '../controllers/search.controller.js';

const router = express.Router();

router.get('/game/:query', searchGame);

export default router;