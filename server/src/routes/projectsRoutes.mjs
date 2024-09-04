import express from "express";
import {getAllProjects, updateProject, createProject, deleteProject} from "../controllers/projectsController.mjs";

const router = express.Router();


router.get("/projects", getAllProjects);
router.post("/projects", createProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

export default router;
