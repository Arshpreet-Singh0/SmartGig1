import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { acceptProposal, createProject, getClientProjects } from "../controllers/client.controller";

const router = express.Router();

router.route("/").post(isAuthenticated, createProject);

router.route('/projects').get(isAuthenticated, getClientProjects);

router.route('/accept-proposal').post(isAuthenticated, acceptProposal);


export default router;