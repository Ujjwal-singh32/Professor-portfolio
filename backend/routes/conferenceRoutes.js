import express from "express";
import {
  createConference,
  totalConference,
  editconf,
  deleteconf,
} from "../controllers/conferenceController.js";

const ConferenceRouter = express.Router();

ConferenceRouter.post("/send-Conference", createConference);
ConferenceRouter.get("/get-total-Conferences", totalConference);
ConferenceRouter.put("/update-Conferences/:Id", editconf);
ConferenceRouter.delete("/delete/:Id", deleteconf);

export default ConferenceRouter;
