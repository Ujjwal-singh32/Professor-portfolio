import express from "express";
import {
  getBlog,
  createBlog,
  totalBlog,
  editBlogs,
  deleteBlog,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.get("/get-blog/:Id", getBlog);
blogRouter.post("/send-blog", upload.single("blogImage"), createBlog);
blogRouter.get("/get-total-blogs", totalBlog);
blogRouter.put("/update-blog/:Id",upload.single("blogImage"), editBlogs);
blogRouter.delete("/delete/:Id" , deleteBlog)
export default blogRouter;
