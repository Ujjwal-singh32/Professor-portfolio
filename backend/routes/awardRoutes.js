import express from "express";
import { createAward,
    totalAwards,
    editaward,
    deleteaward
} from  "../controllers/awardcontroller.js";

const awardrouter = express.Router();


awardrouter.post(
  "/send-award",
  createAward
);
awardrouter.get("/get-total-awards", totalAwards);
awardrouter.put(
  "/update-award/:Id",
  editaward
);
awardrouter.delete("/delete/:Id", deleteaward);
export default awardrouter;
