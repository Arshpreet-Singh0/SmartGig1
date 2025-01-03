import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { acceptProposal, createProject, getClientProjects, getProposals } from "../controllers/client.controller";

const router = express.Router();

router.route("/").post(isAuthenticated, createProject);

router.route('/projects').get(isAuthenticated, getClientProjects);

router.route('/proposals/:projectId').get(isAuthenticated, getProposals);

router.route('/accept-proposal/:projectId/:proposalId').post(isAuthenticated, acceptProposal);


export default router;