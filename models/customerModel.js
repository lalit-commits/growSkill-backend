// customerModel.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  enrolledCourses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Reference to the Course model
      },
      transaction_id: String, // Add a transaction_id field for each course
    },
  ],
  role: {
    type: String,
    default: "customer",
  },
  // Add other customer-related fields as needed
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
