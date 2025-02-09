import express from "express";
import {createAchievement,
    totalAchievement,
    editach,
    deleteResearch
} from  "../controllers/achievementcontroller.js";

const AchiveRouter = express.Router();


AchiveRouter.post(
  "/send-achive",
  createAchievement
);
AchiveRouter.get("/get-total-achives", totalAchievement);
AchiveRouter.put(
  "/update-achives/:Id",
  editach
);
AchiveRouter.delete("/delete/:Id", deleteResearch);
export default AchiveRouter;
