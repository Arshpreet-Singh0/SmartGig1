import express from 'express';
import { signin, signup, updateProfile } from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/isAuthenticated';
const router = express.Router();

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/update-profile').patch(isAuthenticated, updateProfile);

export default router;