import express from 'express';
import { login, signup,upload, verify } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',login);
router.post('/signup',upload.single('image'),signup);
router.get('/verify',authMiddleware,verify)

export default router