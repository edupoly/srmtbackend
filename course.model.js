const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  coursename: String,
  courseId: String,
  cost: Number,
});

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;
