const mongoose = require("mongoose");
const bcrypt = ('bcrypt')

const reportSchema = new mongoose.Schema({
  wasteType: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String }, // image URL or filename
  location: { type: String, required: true },
  status: { type: String, 
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending" }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now } 
});

reportSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Report", reportSchema);
