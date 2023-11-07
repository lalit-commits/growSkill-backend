const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      if (decoded.instructor) {
        req.instructor = decoded.instructor;
      } else if (decoded.customer) {
        req.customer = decoded.customer;
      } else {
        throw new Error("Invalid user role");
      }

      next();
    } else {
      throw new Error("Token is missing or invalid");
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = validateToken;
