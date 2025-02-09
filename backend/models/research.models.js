import mongoose from "mongoose";
const ResearchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  ResearchImage: {
    type: String,
    default: "",
  },
  topic: {
    type: String,
    required: true,
    maxlength: 15,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  authors: {
    type: [String],
    default: [],
  },
});
export const ResearchModel = mongoose.model("Research", ResearchSchema);
