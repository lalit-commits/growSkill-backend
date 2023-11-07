# GROWSKILL-BACKEND


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)

## Overview

This project, **GROWSKILL-BACKEND**, is designed to handle various functionalities and API endpoints for a learning platform. It provides features for instructors, courses, and customers.

## Features

- **Instructors:**
  - Register a new instructor.
  - Instructor login.
  - Log out an instructor.
  - Retrieve current instructor information.

- **Courses:**
  - Retrieve a list of all courses.
  - Create a new course.
  - Retrieve details of a specific course by ID.
  - Update course details.

- **Customers:**
  - Register a new customer.
  - Customer login.
  - Log out a customer.
  - Retrieve current customer information.

## Repository Structure

The project is structured as follows:

```plaintext
growSkill-backend/
├── config/
│   └── dbConnection.js
├── constants.js
├── controllers/
│   ├── courseController.js
│   ├── customerController.js
│   └── instructorController.js
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models/
│   ├── courseModel.js
│   ├── customerModel.js
│   └── instructorModel.js
├── package-lock.json
├── package.json
├── routes/
│   ├── courseRoute.js
│   ├── customerRoute.js
│   └── instructorRoute.js
└── server.js
```

- `config/`: Contains configurations, such as database connection settings.
- `controllers/`: Includes controllers responsible for handling various API endpoints and business logic.
- `middleware/`: Contains middleware functions, including error handling and token validation.
- `models/`: Defines the data models for courses, customers, and instructors.
- `routes/`: Defines the API routes and connects them to the appropriate controllers.
- `package-lock.json`: Auto-generated file specifying dependency versions.
- `package.json`: Contains project metadata and dependencies.
- `constants.js`: File for defining constants used throughout the project.
- `server.js`: The entry point of the application

---

## 🔵 API Endpoints

### Instructors

- `POST /v1/instructor/registerInstructor`
  - **Description**: Register a new instructor.
  - **Usage**: Use this endpoint to create a new instructor account. Provide the instructor's name, email, password, and specialization.

- `POST /v1/instructor/loginInstructor`
  - **Description**: Instructor login.
  - **Usage**: Log in as an instructor. Provide the instructor's email and password to authenticate and receive an access token for protected routes.

- `POST /v1/instructor/logoutInstructor`
  - **Description**: Log out an instructor.
  - **Usage**: Log out the currently authenticated instructor, which invalidates their access token.

- `GET /v1/instructor/currentInstructor`
  - **Description**: Retrieve current instructor information.
  - **Usage**: Fetch information about the currently authenticated instructor using the access token.

### Courses

- `GET /v1/courses`
  - **Description**: Retrieve a list of all courses.
  - **Usage**: Get a list of all available courses.

- `POST /v1/courses`
  - **Description**: Create a new course.
  - **Usage**: Add a new course to the platform by providing course details.

- `GET /v1/courses/:id`
  - **Description**: Retrieve details of a specific course by ID.
  - **Usage**: View detailed information about a specific course based on its unique ID.

- `PUT /v1/courses/:id`
  - **Description**: Update course details.
  - **Usage**: Modify the details of a specific course, typically for instructors to update their course content.

### Customers

- `POST /v1/customer/registerCustomer`
  - **Description**: Register a new customer.
  - **Usage**: Create a new customer account. Provide the customer's name, email, and password.

- `POST /v1/customer/loginCustomer`
  - **Description**: Customer login.
  - **Usage**: Log in as a customer. Provide the customer's email and password to authenticate and receive an access token for protected routes.

- `POST /v1/customer/logoutCustomer`
  - **Description**: Log out a customer.
  - **Usage**: Log out the currently authenticated customer, which invalidates their access token.

- `GET /v1/customer/currentCustomer`
  - **Description**: Retrieve current customer information.
  - **Usage**: Fetch information about the currently authenticated customer using the access token.

Please follow the usage instructions and provide the required information when making requests to these endpoints.








