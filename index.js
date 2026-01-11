import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js"
import blogRoutes from "./routes/blog.routes.js"



const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world");
});

// api endpoints
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Running on port ${PORT}`);
});