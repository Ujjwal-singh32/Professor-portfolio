import mongoose from "mongoose";
const AchieveMentSchema = new mongoose.Schema({
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
export const AchievementModel = mongoose.model("Achievement", AchieveMentSchema);
