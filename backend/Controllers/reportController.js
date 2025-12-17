const path = require ('path')
const fs = require ('fs')
const Report = require("../Models/report");

// Create a new waste report
exports.createReport = async (req, res) => {
  try {
    const { wasteType, description, location } = req.body;

     if (!wasteType || !description || !location) {
      return res.status(400).json({ error: "wasteType, description and address are required" });
    }

    const photo = req.file ? req.file.filename : null;

    const newReport = new Report({
      wasteType,
      description,
      location,
      photo
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully!", report: newReport });
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to submit report" });
  }
};

// Get all reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};

// Update report status (Pending → In Progress → Resolved)
exports.updateStatus = async (req, res) => {
  try {
    const updated = await Report.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.status(200).json({ message: "Status updated", report: updated });
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to update report status" });
  }
};

//delete reports by id

exports.deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByIdAndDelete(id);
    if (!report) return res.status(404).json({ error: "Report not found" });

    if (report.photo) {
      const filePath = path.join(__dirname, "..", "uploads", report.photo);
      fs.unlink(filePath, (err) => {
        if (err) console.warn("Failed to delete image file:", err.message);
      });
    }

    res.status(200).json({ message: "Report deleted" });
  } catch (err) {
    console.error("deleteReport error:", err);
    res.status(500).json({ error: "Failed to delete report" });
  }
};
