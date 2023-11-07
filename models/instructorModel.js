const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "Email address already in use"],
  },
  password: {
    type: String,
    required: [true],
  },
  specialization: String,
  role: {
    type: String,
    default: "instructor",
  },

  // Add other instructor-related fields as needed
});

module.exports = mongoose.model("Instructor", instructorSchema);
