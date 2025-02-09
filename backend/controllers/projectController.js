import { ProjectModel } from "../models/project.models.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createProject = async (req, res) => {
  try {
    const { title, category, description, members } = req.body;

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
    const projectData = {
      title,
      category,
      description,
      projectImage: imageUrl,
      members,
    };

    const projects = new ProjectModel(projectData);
    await projects.save();
    res.json({ success: true, message: "Project Added", projects: projects });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { Id } = req.params;

    const project = await ProjectModel.find({ _id: Id });
    if (project.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Projects found for this id.",
      });
    }
    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching projects.",
    });
  }
};

const totalProject = async (req, res) => {
  try {
    const projects = await ProjectModel.find({});
    if (projects.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No projects found" });
    }

    return res.status(200).json({
      success: true,
      message: "projects retrieved successfully",
      projects: projects,
    });
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving projects",
    });
  }
};

const editProject = async (req, res) => {
  try {
    const { Id } = req.params;
    const { title, description, date, category, members } = req.body;
    // console.log(title)
    let project = await ProjectModel.findById(Id);
    if (!project) {
      return res.status(404).json({ message: "project not found" });
    }

    // Update fields
    project.title = title || project.title;
    project.description = description || project.description;
    project.date = date;
    project.category = category || project.category;
    project.members = members || project.members;

    let image = req.file;
    let imageUrl = null;

    if (image) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }
    project.projectImage = imageUrl || project.projectImage;
    // console.log(project);
    await project.save();

    res
      .status(200)
      .json({ success: true, message: "project updated successfully", project });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    await ProjectModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting project",
    });
  }
};

export {createProject, getProject,totalProject,deleteProject,editProject};
