const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    publicId: { type: String, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: String, required: true, trim: true },
    systemType: String,
    systemSize: String,
    panels: String,
    inverter: String,
    battery: String,
    services: [{ type: String }],
    status: {
      type: String,
      enum: ["submitted", "under-review", "design", "installer-review", "completed"],
      default: "submitted"
    },
    adminNotes: [{ body: String, createdAt: { type: Date, default: Date.now } }],
    solarGoatReview: {
      reviewed: { type: Boolean, default: false },
      notes: { type: String, default: "" }
    },
    files: [{
      name: String,
      path: String,
      category: { type: String, default: "general" },
      uploadedAt: { type: Date, default: Date.now }
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
