import { BlogModel } from "../models/blog.models.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    let image = req.file;
    let imageUrl = null;

    if (image) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }
    console.log(imageUrl);
    const blogData = {
      title,
      category,
      description,
      blogImage: imageUrl,
    };

    const blogs = new BlogModel(blogData);
    await blogs.save();
    res.json({ success: true, message: "Blog Added", blogs: blogs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const { Id } = req.params;

    const blogs = await BlogModel.find({ _id: Id });
    if (blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No blogs found for this id.",
      });
    }
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching blogs.",
    });
  }
};

const totalBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    if (blogs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found" });
    }

    return res.status(200).json({
      success: true,
      message: "blogs retrieved successfully",
      blogs: blogs,
    });
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving blogs",
    });
  }
};

const editBlogs = async (req, res) => {
  try {
    const { Id } = req.params;
    const { title, description, date, category } = req.body;
  // console.log(title)
    let blog = await BlogModel.findById(Id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Update fields
    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.date = date
    blog.category = category || blog.category;

    let image = req.file;
    let imageUrl = null;

    if (image) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }
    blog.blogImage = imageUrl || blog.blogImage;
    console.log(blog)
    // Save updated blog
    await blog.save();

    res.status(200).json({success:true, message: "Blog updated successfully", blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {

    const { Id } = req.params;
    console.log(Id)
    await BlogModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "blogs deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting blogs",
    });
  }
};

export { createBlog, getBlog, totalBlog, editBlogs, deleteBlog };