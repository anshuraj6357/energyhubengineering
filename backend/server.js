require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*"
}));
app.use(express.json({ limit: "2mb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

const port = process.env.PORT || 5000;

async function start() {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Backend running on port ${port}`));
}

start().catch((err) => {
  console.error("Startup error:", err);
  process.exit(1);
});
