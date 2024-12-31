import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createProposal, getFreelancerAssignedProjects } from "../controllers/freelancer.controller";

const router = express.Router();

router.route('/:projectId').post(isAuthenticated, createProposal);

router.route('/assigned-project').get(isAuthenticated, getFreelancerAssignedProjects);

export default router;