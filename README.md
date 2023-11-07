## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [🛡️ Roles and Functionalities](#-roles-and-functionalities)
  - [Instructor](#instructor)
  - [Course](#course)
  - [Customer](#customer)
- [📂 Repository Structure](#-repository-structure)
- [🔵 API Endpoints](#-api-endpoints)
  - [Instructors](#instructors)
  - [Courses](#courses)
  - [Customers](#customers)
- [⚙️ Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [Installation](#installation)


---

## 🛡️ Roles and Functionalities

This GrowSkill Backend project involves the following roles and their respective functionalities:

### Instructor

- **Registration**: Instructors can register for an account by providing their name, email, password, and specialization.
- **Login**: Authenticated instructors can log in with their email and password to access instructor-specific features.
- **Logout**: Instructors can log out, which invalidates their access token.
- **Course Creation**: Instructors can create new courses with course details.
- **Course Management**: Instructors can manage (update) the details of their courses.

### Course

- **Course Listing**: Courses are available for viewing by all users.
- **Course Details**: Users can retrieve detailed information about a specific course by providing its unique ID.

### Customer

- **Registration**: Customers can register for an account by providing their name, email, and password.
- **Login**: Authenticated customers can log in with their email and password to access customer-specific features.
- **Logout**: Customers can log out, which invalidates their access token.

Each role in the system has distinct functionalities designed to cater to their needs, whether it's creating content (instructors), accessing course details (all users), or managing their accounts (instructors and customers). These roles are essential for managing the learning platform efficiently.

Please follow the specific API endpoints mentioned in the README to utilize these functionalities.


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

## 📂 Repository Structure

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

```

config/: Contains configurations, such as database connection settings.
controllers/: Includes controllers responsible for handling various API endpoints and business logic.
middleware/: Contains middleware functions, including error handling and token validation.
models/: Defines the data models for courses, customers, and instructors.
routes/: Defines the API routes and connects them to the appropriate controllers.
package-lock.json: Auto-generated file specifying dependency versions.
package.json: Contains project metadata and dependencies.
constants.js: File for defining constants used throughout the project.
server.js: The entry point of the application

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



## 🚀 Getting Started

Get started with project by following these steps:

### Installation

1. Clone the growSkill-backend repository:
   ```sh
   git clone https://github.com/lalit-commits/growSkill-backend


2. Change to the project directory:
   ```sh
   cd growSkill-backend


3.Install the required dependencies:
```sh
npm install




