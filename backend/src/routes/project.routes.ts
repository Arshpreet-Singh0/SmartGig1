import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import {
  getProject,
} from "../controllers/project.controller";
const router = express.Router();


router.route("/:page").get(getProject);


export default router;
