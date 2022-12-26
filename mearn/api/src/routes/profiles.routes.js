import express from 'express';
import uploadConfig from '../middlewares/profiles.middleware.js';
import { getUsers, createUser, deleteUser, updateUser, profileImages } from '../controllers/profiles.controller.js';

const router = express.Router();

/* Get Request */
router.get('/', getUsers);
/* Insert New Record */
router.post('/', createUser);
/* Delete Request */
router.delete('/:id', deleteUser);
/* Update Request */
router.patch('/:id', updateUser);
/* Insert Profile Attachement */
router.post('/attachment/:id', uploadConfig,  profileImages);

export default router;