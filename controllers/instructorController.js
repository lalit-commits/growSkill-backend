const asyncHandler = require("express-async-handler");
const Course = require("../models/instructorModel");
const Instructor = require("../models/instructorModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//instructor register
const registerInstructor = asyncHandler(async (req, res) => {
  // Send a success response with a status code and a message
  const { name, email, password, specialization } = req.body;
  if (!name || !email || !password || !specialization) {
    res.status(400);
    throw new Error("All fields are madatory");
  }
  const existingInstructor = await Instructor.findOne({ email });
  if (existingInstructor) {
    res.status(400);
    throw new Error("Instructor already Registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("Hashed Password:", hashedPassword);
  const instructor = await Instructor.create({
    name,
    email,
    password: hashedPassword,
    specialization,
  });
  console.log(`Instructor Created ${instructor}`);

  if (instructor) {
    res.status(201).json({ _id: instructor.id, email: instructor.email });
  } else {
    res.status(400);
    throw new Error("Instructor not Valid");
  }
  // res.status(201).json({ message: "Instructor registered successfully" });
});

//instructor log in
const loginInstructor = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const instructor = await Instructor.findOne({ email });
  if (instructor && (await bcrypt.compare(password, instructor.password))) {
    const accessToken = jwt.sign(
      {
        instructor: {
          name: instructor.name,
          email: instructor.email,
          id: instructor.id,
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

// const logoutInstructor = (req, res) => {
//   tokenBlacklist.add(req.token);
//   res.status(200).json({ message: "Logged out successfully" }); ///to log out instructor
// };

const logoutInstructor = asyncHandler(async (req, res) => {
  try {
    // Invalidate the access token by adding it to the blacklist
    tokenBlacklist.add(req.token);

    res.status(200).json({ message: "Instructor logged out successfully" });
  } catch (error) {
    console.error("Error logging out instructor:", error);
    res.status(500).json({ error: "Failed to log out instructor" });
  }
});

//private
//current instructor info
const currentInstructor = asyncHandler(async (req, res) => {
  // Send a success response with a status code and a message
  res.json(req.instructor);
});

// const getCourses = (req, res) => {
//   console.log("Instrutor Log In Succefully");
// };

module.exports = {
  registerInstructor,
  loginInstructor,
  logoutInstructor,
  currentInstructor,
};
