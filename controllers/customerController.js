const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");
const Course = require("../models/courseModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register a new customer
const registerCustomer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are madatory");
  }

  // Check if the email is already registered
  const existingCustomer = await Customer.findOne({ email });

  if (existingCustomer) {
    res.status(400);
    throw new Error("Customer already exist");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = await Customer.create({
    name,
    email,
    password: hashedPassword,
  });
  console.log(`customer Created ${customer}`);

  if (customer) {
    res.status(201).json({ _id: customer.id, email: customer.email });
  } else {
    res.status(400);
    throw new Error("Customer not Valid");
  }
});

// Login a customer
const loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const customer = await Customer.findOne({ email });
  if (customer && (await bcrypt.compare(password, customer.password))) {
    const accessToken = jwt.sign(
      {
        customer: {
          name: customer.name,
          email: customer.email,
          id: customer.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is invalid");
  }
});

const logoutCustomer = (req, res) => {
  // Invalidation logic - for example, using a token blacklist
  try {
    // Add the customer's JWT to a blacklist
    tokenBlacklist.add(req.token);

    // Send a success response
    res.status(200).json({ message: "Customer logged out successfully" });
  } catch (error) {
    // Handle errors, if any
    console.error("Error logging out customer:", error);
    res.status(500).json({ error: "Failed to log out customer" });
  }
};
// Get all courses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json(courses);
});

//suscribe to course
const suscribeCourse = async (req, res) => {
  try {
    // Get the course ID from the request parameters
    const courseId = req.params.id;

    // Get the customer's ID from the request (you may obtain it from authentication)
    const customerId = req.customer.id;

    // Find the customer by ID
    const customer = await Customer.findById(customerId);

    // Check if the customer is already subscribed to this course
    const enrolledCourseIndex = customer.enrolledCourses.findIndex(
      (course) => course.courseId == courseId
    );

    if (enrolledCourseIndex !== -1) {
      return res
        .status(400)
        .json({ error: "Customer is already subscribed to this course" });
    }

    // Find the course by ID
    const course = await Course.findById(courseId);

    // Check if the course exists
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Set the transactionId within the enrolledCourses array
    const { transactionId } = req.body;
    customer.enrolledCourses.push({
      courseId,
      transaction_id: transactionId,
    });

    // Save the updated customer
    await customer.save();

    res.status(200).json({ message: "Successfully subscribed to the course" });
  } catch (error) {
    console.error("Error subscribing to course:", error);
    res.status(500).json({ error: "Failed to subscribe to the course" });
  }
};

// Get enrolled courses
const getEnrolledCourses = asyncHandler(async (req, res) => {
  try {
    const customer = await Customer.findById(req.customer.id).populate(
      "enrolledCourses.courseId" // Populate the courseId reference
    );

    const enrolledCourses = customer.enrolledCourses.map((enrollment) => ({
      courseId: enrollment.courseId,
      transaction_id: enrollment.transaction_id,
    }));

    res.status(200).json(enrolledCourses);
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    res.status(500).json({ error: "Failed to fetch enrolled courses" });
  }
});

module.exports = {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  getAllCourses,
  suscribeCourse,
  getEnrolledCourses,
};
