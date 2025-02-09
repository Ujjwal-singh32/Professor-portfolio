import { ResearchModel } from "../models/research.models.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createResearch = async (req, res) => {
  try {
    const { title, topic, description, authors } = req.body;

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
    const ResearchData = {
      title,
      topic,
      description,
      ResearchImage: imageUrl,
      authors,
    };

    const Researchs = new ResearchModel(ResearchData);
    await Researchs.save();
    res.json({ success: true, message: "Research Added", Researchs: Researchs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getResearch = async (req, res) => {
  try {
    const { Id } = req.params;

    const Research = await ResearchModel.find({ _id: Id });
    if (Research.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Researchs found for this id.",
      });
    }
    res.status(200).json({
      success: true,
      Research,
    });
  } catch (error) {
    console.error("Error fetching Researchs:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching Researchs.",
    });
  }
};

const totalResearch = async (req, res) => {
  try {
    const Researchs = await ResearchModel.find({});
    if (Researchs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No Researchs found" });
    }

    return res.status(200).json({
      success: true,
      message: "Researchs retrieved successfully",
      Researchs: Researchs,
    });
  } catch (error) {
    console.error("Error retrieving Researchs:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving Researchs",
    });
  }
};

const editResearch = async (req, res) => {
  try {
    const { Id } = req.params;
    const { title, description, date, topic, authors } = req.body;
    // console.log(title)
    let Research = await ResearchModel.findById(Id);
    if (!Research) {
      return res.status(404).json({ message: "Research not found" });
    }

    // Update fields
    Research.title = title || Research.title;
    Research.description = description || Research.description;
    Research.date = date;
    Research.topic = topic || Research.topic;
    Research.authors = authors || Research.authors;

    let image = req.file;
    let imageUrl = null;

    if (image) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }
    Research.ResearchImage = imageUrl || Research.ResearchImage;
    // console.log(Research);
    await Research.save();

    res
      .status(200)
      .json({ success: true, message: "Research updated successfully", Research });
  } catch (error) {
    console.error("Error updating Research:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteResearch = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    await ResearchModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "Research deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Research:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting Research",
    });
  }
};

export {createResearch, getResearch,totalResearch,deleteResearch,editResearch};
