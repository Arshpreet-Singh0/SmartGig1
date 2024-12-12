import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { createProposal, getProposals } from '../controllers/proposal.controller';
const router = express.Router();

router.route('/:projectId').post(isAuthenticated, createProposal);

router.route('/').get(isAuthenticated, getProposals);

export default router;