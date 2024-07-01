import express from 'express';
import * as boardController from '../controllers/boardController.js'
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

router.get('/', verifyAuth, boardController.getBoardsByUserId);

router.get('/:id', verifyAuth, boardController.getBoardById);

router.post('/', verifyAuth, boardController.createBoard);

router.delete('/:id', verifyAuth, boardController.deleteBoard);

export default router;