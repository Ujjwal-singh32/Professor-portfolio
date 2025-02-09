import { AwardModel } from "../models/award.models.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createAward = async (req, res) => {
  try {
    const { name, description,year } = req.body;

    const AwardData = {
      name,
      description,
      year
    };

    const award = new AwardModel(AwardData);
    await award.save();
    res.json({ success: true, message: "Award  Added", award: award });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const totalAwards = async (req, res) => {
  try {
    const award = await AwardModel.find({});
    if (award.length === 0) {
      return res.status(404).json({ success: false, message: "No award found" });
    }

    return res.status(200).json({
      success: true,
      message: "award retrieved successfully",
      award: award,
    });
  } catch (error) {
    console.error("Error retrieving award:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving award",
    });
  }
};

const editaward = async (req, res) => {
  try {
    const { Id } = req.params;
    const { name, description, year } = req.body;
    // console.log(title)
    let award = await AwardModel.findById(Id);
    if (!award) {
      return res.status(404).json({ message: "award not found" });
    }

    // Update fields
    award.name = name || award.name;
    award.description = description || award.description;
    award.year=year || award.year

    await award.save();

    res.status(200).json({
      success: true,
      message: "award updated successfully",
      award,
    });
  } catch (error) {
    console.error("Error updating award:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteaward = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    await AwardModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "award deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting award:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting award",
    });
  }
};

export {
    createAward,
    totalAwards,
    editaward,
    deleteaward
};
