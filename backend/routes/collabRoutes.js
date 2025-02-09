import express from "express";
import {
    createCollab, collabsearch,totalCollab,deleteCollab,editCollab
} from "../controllers/collabrationscontroller.js";

const CollabRouter = express.Router();

CollabRouter.get("/get-collab/:Id", collabsearch);
CollabRouter.post(
  "/send-collab",
  createCollab
);
CollabRouter.get("/get-total-collab", totalCollab);
CollabRouter.put(
  "/update-collab/:Id",
  editCollab
);
CollabRouter.delete("/delete/:Id", deleteCollab);
export default CollabRouter;
