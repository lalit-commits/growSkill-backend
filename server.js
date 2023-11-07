const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/v1/courses", require("./routes/courseRoute"));

app.use("/v1/instructor", require("./routes/instructorRoute"));
app.use("/v1/customer", require("./routes/customerRoute"));

app.use(errorHandler); //throwing error

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
