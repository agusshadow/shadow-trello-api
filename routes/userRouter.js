import express from 'express';
import * as userController from '../controllers/userController.js'

const router = express.Router();

router.get('/', userController.listUsers);

router.post('/', userController.addUser)

export default router;