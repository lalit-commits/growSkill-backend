// customerRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  getAllCourses,
  suscribeCourse,
  getEnrolledCourses,
} = require("../controllers/customerController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/registerCustomer", registerCustomer);
router.post("/loginCustomer", loginCustomer); //login customer
router.post("/logout", validateToken, logoutCustomer); //  customer logout

router.get("/course", validateToken, getAllCourses); // Get all courses
router.post("/course/:id", validateToken, suscribeCourse); // suscribe to course

router.get("/enrolledCourses", validateToken, getEnrolledCourses); // Get enrolled courses

module.exports = router;
