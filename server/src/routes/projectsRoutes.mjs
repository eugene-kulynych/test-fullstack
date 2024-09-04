import express from "express";
import {getAllProjects, updateProject, createProject, deleteProject} from "../controllers/projectsController.mjs";

const router = express.Router();


router.get("/projects", getAllProjects);
router.post("/projects", createProject);
router.put("projects/:id", updateProject);
router.delete("projects/:id", deleteProject);

export default router;
