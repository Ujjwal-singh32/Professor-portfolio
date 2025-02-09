import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  blogImage: {
    type: String,
    default :"",
  },
  category: {
    type: String,
    required: true,
    maxlength:15
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export const BlogModel = mongoose.model("Blog", blogSchema);
