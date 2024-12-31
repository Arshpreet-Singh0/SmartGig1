import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { getFreelancerAssignedProjects } from "../controllers/freelancer.controller";

const router = express.Router();

router.route('/assigned-project').get(isAuthenticated, getFreelancerAssignedProjects);

export default router;