import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { getClientProjects } from "../controllers/client.controller";

const router = express.Router();

router.route('/projects').get(isAuthenticated, getClientProjects);

export default router;