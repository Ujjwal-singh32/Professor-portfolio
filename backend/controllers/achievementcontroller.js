import { AchievementModel } from "../models/achievement.models.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createAchievement = async (req, res) => {

  try {
    const { name, description } = req.body;
    //console.log(name , description)
    const achievementData = {
      name,
      description,
    };
    //console.log("asa",achievementData)
    const ach = new AchievementModel(achievementData);
    await ach.save();
    res.json({ success: true, message: "Achievment  Added", ach: ach });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const totalAchievement = async (req, res) => {
  try {
    const ach = await AchievementModel.find({});
    if (ach.length === 0) {
      return res.status(404).json({ success: false, message: "No ach found" });
    }

    return res.status(200).json({
      success: true,
      message: "ach retrieved successfully",
      ach: ach,
    });
  } catch (error) {
    console.error("Error retrieving ach:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving ach",
    });
  }
};

const editach = async (req, res) => {
  try {
    const { Id } = req.params;
    const { name, description } = req.body;
    // console.log(title)
    let ach = await AchievementModel.findById(Id);
    if (!ach) {
      return res.status(404).json({ message: "ach not found" });
    }

    // Update fields
    ach.name = name || ach.name;
    ach.description = description || ach.description;

    await ach.save();

    res.status(200).json({
      success: true,
      message: "ach updated successfully",
      ach,
    });
  } catch (error) {
    console.error("Error updating ach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteResearch = async (req, res) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    await AchievementModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "ach deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting ach:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting ach",
    });
  }
};

export {
    createAchievement,
    totalAchievement,
    editach,
    deleteResearch

 
};
