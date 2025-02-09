import express from "express";
import { getProject,totalProject,deleteProject,editProject,createProject } from "../controllers/projectController.js";
import upload from "../middleware/multer.js";

const projectRouter = express.Router();

projectRouter.get("/get-project/:Id", getProject);
projectRouter.post("/send-project", upload.single("projectImage"), createProject);
projectRouter.get("/get-total-projects", totalProject);
projectRouter.put("/update-projects/:Id",upload.single("projectImage"), editProject);
projectRouter.delete("/delete/:Id" , deleteProject)
export default projectRouter;
