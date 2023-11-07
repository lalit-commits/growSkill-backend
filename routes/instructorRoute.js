const express = require("express");
const router = express.Router();

const {
  registerInstructor,
  loginInstructor,
  logoutInstructor,
  currentInstructor,
} = require("../controllers/instructorController");
const validateToken = require("../middleware/validateTokenHandler");
// const { invalidateToken } = require("../middleware/invalidateToken");

router.post("/registerInstructor", registerInstructor);
router.post("/loginInstructor", loginInstructor); //Login instructor
router.post("/logoutInstructor", validateToken, logoutInstructor); // Logout instructor
router.get("/currentInstructor", validateToken, currentInstructor);

// Add more routes and controllers as needed

module.exports = router;
