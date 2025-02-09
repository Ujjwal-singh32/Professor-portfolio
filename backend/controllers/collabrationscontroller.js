import { collabrationModel } from "../models/collabrations.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createCollab = async (req, res) => {
  try {
    const { title, description, professors } = req.body;
    const CollabData = {
      title,
      description,
      professors,
    };

    const Collabs = new collabrationModel(CollabData);
    await Collabs.save();
    res.json({ success: true, message: "Collabs Added", Collabs: Collabs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const collabsearch = async (req, res) => {
  try {
    const { Id } = req.params;

    const Collabs = await collabrationModel.find({ _id: Id });
    if (Collabs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Collabs found for this id.",
      });
    }
    res.status(200).json({
      success: true,
      Collabs,
    });
  } catch (error) {
    console.error("Error fetching Collabs:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching Collabs.",
    });
  }
};

const totalCollab = async (req, res) => {
  try {
    const Collabs = await collabrationModel.find({});
    if (Collabs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No Collabs found" });
    }

    return res.status(200).json({
      success: true,
      message: "Researchs retrieved successfully",
      Collabs: Collabs,
    });
  } catch (error) {
    console.error("Error retrieving Collabs:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving Collabs",
    });
  }
};

const editCollab = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    const { title, description, professors } = req.body;
    // console.log(title)
    let Collabs = await collabrationModel.findById(Id);
    if (!Collabs) {
      return res.status(404).json({ message: "Collabs not found" });
    }

    // Update fields
    Collabs.title = title || Collabs.title;
    Collabs.description = description || Collabs.description;
    Collabs.professors = professors || Collabs.professors;

    await Collabs.save();

    res
      .status(200)
      .json({ success: true, message: "Collabs updated successfully", Collabs });
  } catch (error) {
    console.error("Error updating Research:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCollab = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    await collabrationModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "Collabs deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Collabs:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting Collabs",
    });
  }
};

export {createCollab, collabsearch,totalCollab,deleteCollab,editCollab};
