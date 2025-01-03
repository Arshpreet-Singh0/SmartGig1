import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createProposal, getFreelancerAssignedProjects, getProjectProposal } from "../controllers/freelancer.controller";

const router = express.Router();

router.route('/:projectId').post(isAuthenticated, createProposal);

router.route('/proposals').get(isAuthenticated, getProjectProposal);

router.route('/assigned-project').get(isAuthenticated, getFreelancerAssignedProjects);

export default router;