import express from 'express';
import { addGameToLibrary, getUserLibrary, removeGameFromLibrary } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/library', addGameToLibrary);
router.delete('/library', removeGameFromLibrary);
router.get('/library', getUserLibrary);

export default router;