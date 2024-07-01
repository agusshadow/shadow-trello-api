import express from 'express';
import * as taskController from '../controllers/taskController.js'
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

router.get('/', verifyAuth, taskController.getTasksByUserId);

router.get('/:id', verifyAuth, taskController.getTaskById);

router.post('/', verifyAuth, taskController.createTask);

router.put('/:id', verifyAuth, taskController.updateTask);

export default router;