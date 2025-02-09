import mongoose from "mongoose";
const AwardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  year:{
    type:Number,
    required:true
  }
});
export const AwardModel = mongoose.model("Award", AwardSchema);
