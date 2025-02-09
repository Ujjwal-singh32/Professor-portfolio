import express from "express";
import {
  getResearch,
  totalResearch,
  deleteResearch,
  createResearch,
  editResearch,
} from "../controllers/researchController.js";
import upload from "../middleware/multer.js";

const ResearchRouter = express.Router();

ResearchRouter.get("/get-research/:Id", getResearch);
ResearchRouter.post(
  "/send-research",
  upload.single("ResearchImage"),
  createResearch
);
ResearchRouter.get("/get-total-researchs", totalResearch);
ResearchRouter.put(
  "/update-researchs/:Id",
  upload.single("ResearchImage"),
  editResearch
);
ResearchRouter.delete("/delete/:Id", deleteResearch);
export default ResearchRouter;
