const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  instructor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor", // Reference to the Instructor model
  },
  classes: [
    {
      date: Date,
      time: String,
      topic: String,
      zoomLink: String,
    },
  ],
  // Add other course-related fields as needed
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
