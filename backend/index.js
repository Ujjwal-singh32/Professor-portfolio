import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import blogRouter from "./routes/blogRoutes.js";
//App config
const app = express();
const port = process.env.PORT || 4001;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// Api endpoints for the app
app.use("/api/blogs",  blogRouter)
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server Running On Port ${port}`));