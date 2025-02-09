import mongoose from "mongoose";
const collabrationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  professors: {
    type: [String],
    default: [],
  },
});
export const collabrationModel = mongoose.model("collabration", collabrationSchema);
