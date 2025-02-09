import mongoose from "mongoose";
const ConferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
export const ConferenceModel = mongoose.model("Conference", ConferenceSchema);
