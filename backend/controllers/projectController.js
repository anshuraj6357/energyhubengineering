const { nanoid } = require("nanoid");
const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      publicId: `SG-${nanoid(8).toUpperCase()}`
    });
    res.status(201).json({ message: "Project submitted", project });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getPublicProject = async (req, res) => {
  const project = await Project.findOne({ publicId: req.params.publicId })
    .select("publicId name status systemType systemSize createdAt updatedAt");
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ project });
};

exports.listProjects = async (_req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json({ projects });
};

exports.getProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ project });
};

exports.updateStatus = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ project });
};

exports.addNote = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  project.adminNotes.push({ body: req.body.body });
  await project.save();
  res.json({ project });
};

exports.updateReview = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      "solarGoatReview.reviewed": !!req.body.reviewed,
      "solarGoatReview.notes": req.body.notes || ""
    },
    { new: true }
  );
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ project });
};

exports.uploadFile = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  if (!req.file) return res.status(400).json({ message: "File is required" });

  project.files.push({
    name: req.file.originalname,
    path: `/uploads/${req.file.filename}`,
    category: req.body.category || "general"
  });
  await project.save();
  res.json({ project });
};
