import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createProposal, deleteProposal, getFreelancerAssignedProjects, getProjectProposal } from "../controllers/freelancer.controller";

const router = express.Router();

router.route('/:projectId').post(isAuthenticated, createProposal);

router.route('/proposal').get(isAuthenticated, getProjectProposal);

router.route('/proposal/:proposalId').delete(isAuthenticated, deleteProposal);

router.route('/assigned-project').get(isAuthenticated, getFreelancerAssignedProjects);

export default router;