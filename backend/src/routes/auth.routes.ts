import express from 'express';
import { signin, signup } from '../controllers/auth.controller';
const router = express.Router();

router.route('/signup').post(signup);

router.route('/signin').post(signin);

export default router;