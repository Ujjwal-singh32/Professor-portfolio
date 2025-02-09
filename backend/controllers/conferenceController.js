import { ConferenceModel } from "../models/conference.model.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

const createConference = async (req, res) => {

  try {
    const { name, description } = req.body;
    //console.log(name , description)
    const ConferenceData = {
      name,
      description,
    };
    //console.log("asa",ConferenceData)
    const conf = new ConferenceModel(ConferenceData);
    await conf.save();
    res.json({ success: true, message: "conf  Added", conf: conf });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const totalConference = async (req, res) => {
  try {
    const conf = await ConferenceModel.find({});
    if (conf.length === 0) {
      return res.status(404).json({ success: false, message: "No conf found" });
    }

    return res.status(200).json({
      success: true,
      message: "conf retrieved successfully",
      conf: conf,
    });
  } catch (error) {
    console.error("Error retrieving conf:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while retrieving ach",
    });
  }
};

const editconf = async (req, res) => {
  try {
    const { Id } = req.params;
    const { name, description } = req.body;
    // console.log(title)
    let conf = await ConferenceModel.findById(Id);
    if (!conf) {
      return res.status(404).json({ message: "conf not found" });
    }

    // Update fields
    conf.name = name || conf.name;
    conf.description = description || conf.description;

    await conf.save();

    res.status(200).json({
      success: true,
      message: "conf updated successfully",
      conf,
    });
  } catch (error) {
    console.error("Error updating ach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteconf = async (req, res) => {
  try {
    const { Id } = req.params;
    //console.log(Id);
    await ConferenceModel.findByIdAndDelete(Id);
    return res.status(200).json({
      success: true,
      message: "conf deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting conf:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting conf",
    });
  }
};

export {
    createConference,
    totalConference,
    editconf,
    deleteconf
};
