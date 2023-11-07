const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");
const Instructor = require("../models/instructorModel");

const getCourses = asyncHandler(async (req, res) => {
  // Implement the logic to fetch and return a list of courses here
  // You might fetch data from a database or another source
  // Send a JSON response with the list of courses
  // console.log(req.instructor);
  const courses = await Course.find({ instructor_id: req.instructor.id });
  res.status(200).json(courses);
});

const getCourse = asyncHandler(async (req, res) => {
  // Implement the logic to fetch and return a single course by ID here
  // You can access the ID from the request params
  // You might fetch data from a database or another source based on courseId
  // Send a JSON response with the course details
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course Not Found");
  }
  res.status(200).json(course);
});

const addCourse = asyncHandler(async (req, res) => {
  // Implement the logic to add a new course here
  // You might receive course data in the request body
  // You can then add the course to your data store (e.g., database)
  // Send a JSON response with the added course
  console.log("reques body :", req.body);

  // Add the new course to your data store

  const { name, description, price, instructorEmail, classes } = req.body; // Course data from the request body
  if (!name || !description || !price || !instructorEmail || !classes) {
    // console.log("Invalid Check");

    res.status(400);
    throw new Error("All files are mandatory");
  }
  //requesting instructor email in body then finding instructor id from it
  const instructorId = await Instructor.findOne({ email: instructorEmail });

  console.log(instructorId);

  const course = await Course.create({
    name,
    description,
    price,
    instructor_id: instructorId._id,
    classes,
    // user_id:req.user.id,
  });
  res.status(201).json(course);
});

const updateCourse = asyncHandler(async (req, res) => {
  // Implement the logic to update a course here
  // You might receive course data and the course ID in the request
  // You can then update the course in your data store (e.g., database)
  // Send a JSON response with the updated course
  // ID from the request params
  // Updated course data from the request body
  // Update the course with the given ID in your data store

  // const course = await Course.findById(req.params.id);

  // if(contact.user_id.toString()!==req.user.id)
  // {
  //     res.status(403);
  //     throw new Error("User dont have permisssion to update other user contact")
  // }
  const { name, description, price, instructorEmail, classes } = req.body; // Course data from the request body

  const instructorId = await Instructor.findOne({ email: instructorEmail });

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      price,
      instructor_id: instructorId._id,
      classes,
    },
    { new: true }
  );
  res.status(200).json(updatedCourse);
});

const deleteCourse = asyncHandler(async (req, res) => {
  // Implement the logic to delete a course here
  // You might receive the course ID in the request
  // You can then delete the course from your data store (e.g., database)
  // Send a response indicating success or failure
  // ID from the request params
  // Delete the course with the given ID from your data store
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course Not Found");
  }
  // if(course.user_id.toString()!==req.user.id)
  // {
  //     res.status(403);
  //     throw new Error("User dont have permisssion to delete other user contact")
  // }
  await Course.deleteOne({ _id: req.params.id });
  res.status(200).json(course);
});

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
