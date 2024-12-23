import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { createProject, getProject, updateStatus } from '../controllers/project.controller';
const router = express.Router();

router.route('/')
    .post(isAuthenticated, createProject)

router.route('/:page')
    .get(getProject);

router.route('/:projectId')
    .patch(isAuthenticated, updateStatus);


export default router;