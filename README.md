## 📍 Overview

Welcome to the GrowSkill Backend repository, an API for an online learning platform. This API provides services for instructors, courses, and customers. Below, you'll find a detailed description of the available API endpoints and how to use them.

---

## 📦 Features

This backend offers the following features:

- **Instructors**:
  - Register a new instructor.
  - Log in as an instructor.
  - Log out an instructor.
  - Retrieve current instructor information.

- **Courses**:
  - Retrieve a list of all courses.
  - Create a new course.
  - Retrieve details of a specific course.
  - Update course details.

- **Customers**:
  - Register a new customer.
  - Log in as a customer.
  - Log out a customer.
  - Retrieve current customer information.

Please refer to the API Endpoints section for detailed explanations and usage instructions.

---

## 📂 Repository Structure

The repository structure includes the following:

└── growSkill-backend/
├── config/
├── constants.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js



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

---

## ⚙️ Modules

The project's modules are organized into different sections. You can refer to the "Modules" section in your README to get a summary of the files and their purposes.

---

## 🚀 Getting Started

Get started with your project by following these steps:

### Installation

1. Clone the growSkill-backend repository:
   ```sh
   git clone https://github.com/lalit-commits/growSkill-backend

Change to the project directory:

cd growSkill-backend

Install the required dependencies:

npm install


