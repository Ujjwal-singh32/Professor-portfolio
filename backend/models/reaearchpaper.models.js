import mongoose from "mongoose";
const ResearchSchema=new mongoose.Schema({
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
    postedat:{
        type:Date,
        default:Date.now
    },

});
export const ResearchPaper = mongoose.model("ResearchPaper", ResearchSchema);
