import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  projectImage: {
    type: String,
    default: "",
  },
  category: {
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
  members: {
    type: [String],
    default: [],
  },
});
export const ProjectModel = mongoose.model("Project", projectSchema);
