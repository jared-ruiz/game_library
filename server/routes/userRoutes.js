import express from 'express';
import { addGameToLibrary, getUserLibrary } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/library', addGameToLibrary);
router.get('/library', getUserLibrary);

export default router;