const express = require("express");
const multer = require("multer");
const auth = require("../middleware/auth");
const controller = require("../controllers/projectController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, "_");
    cb(null, `${Date.now()}-${safe}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 15 * 1024 * 1024 } });

router.post("/", controller.createProject);
router.get("/track/:publicId", controller.getPublicProject);

router.get("/admin/all", auth, controller.listProjects);
router.get("/admin/:id", auth, controller.getProject);
router.patch("/admin/:id/status", auth, controller.updateStatus);
router.post("/admin/:id/notes", auth, controller.addNote);
router.patch("/admin/:id/review", auth, controller.updateReview);
router.post("/admin/:id/files", auth, upload.single("file"), controller.uploadFile);

module.exports = router;
