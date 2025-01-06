import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import {
  getProject,
  getProjectById,
} from "../controllers/project.controller";
const router = express.Router();


router.route("/:page").get(getProject);

router.route("/project/:projectId").get(getProjectById);


export default router;
