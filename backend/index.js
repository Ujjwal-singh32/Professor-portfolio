import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import blogRouter from "./routes/blogRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import ResearchRouter from "./routes/researchRoutes.js";
import AchiveRouter from "./routes/achievementRoutes.js"
import awardrouter from  "./routes/awardRoutes.js"
import ConferenceRouter from "./routes/conferenceRoutes.js";
import CollabRouter from "./routes/collabRoutes.js";
//App config
const app = express();
const port = process.env.PORT || 4001;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://professor-portfolio-frontend.vercel.app", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Api endpoints for the app
app.use("/api/blogs", blogRouter);
app.use("/api/projects", projectRouter);
app.use("/api/researchs", ResearchRouter);
app.use("/api/achive", AchiveRouter);
app.use("/api/award", awardrouter);
app.use("/api/conference" , ConferenceRouter)
app.use("/api/collab", CollabRouter)
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server Running On Port ${port}`));