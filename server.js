import express, { json } from "express";
import pkg from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import constructionRoutes from "./routes/constructionRoutes.js";
import { config } from 'dotenv';
config();
const urlencoded = pkg.urlencoded
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("views"));

// View Engine (if using EJS templates)
app.set("view engine", "ejs");

// Routes
app.use("/", constructionRoutes);

// 404 Handler (for unmatched routes)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
