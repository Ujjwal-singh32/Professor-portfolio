import mongoose from "mongoose";
const ProjectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:Array
    },
    status:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

export const Project = mongoose.model("Project", ProjectSchema);