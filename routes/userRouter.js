import express from 'express';
import * as userController from '../controllers/userController.js'

const router = express.Router();

router.post('/', userController.register);

router.get('/', userController.listUsers);

router.get('/:id', userController.getUserById);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

export default router;