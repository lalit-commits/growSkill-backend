# GROWSKILL-BACKEND

![Project Logo](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Modules](#modules)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

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

- `config/`: Contains configurations, such as database connection settings.
- `controllers/`: Includes controllers responsible for handling various API endpoints and business logic.
- `middleware/`: Contains middleware functions, including error handling and token validation.
- `models/`: Defines the data models for courses, customers, and instructors.
- `routes/`: Defines the API routes and connects them to the appropriate controllers.
- `package-lock.json`: Auto-generated file specifying dependency versions.
- `package.json`: Contains project metadata and dependencies.
- `constants.js`: File for defining constants used throughout the project.
- `server.js`: The entry point of the application


<details closed><summary>Root</summary>

| File                                                                                                | Summary                   |
| ---                                                                                                 | ---                       |
| [package-lock.json](https://github.com/lalit-commits/growSkill-backend/blob/main/package-lock.json) | Auto-generated file specifying dependency versions |
| [server.js](https://github.com/lalit-commits/growSkill-backend/blob/main/server.js)                 | The entry point of the application |
| [package.json](https://github.com/lalit-commits/growSkill-backend/blob/main/package.json)           | Contains project metadata and dependencies |
| [constants.js](https://github.com/lalit-commits/growSkill-backend/blob/main/constants.js)           | File for defining constants used throughout the project |

</details>

<details closed><summary>Models</summary>

| File                                                                                                         | Summary                   |
| ---                                                                                                          | ---                       |
| [courseModel.js](https://github.com/lalit-commits/growSkill-backend/blob/main/models/courseModel.js)         | Defines the data model for courses |
| [customerModel.js](https://github.com/lalit-commits/growSkill-backend/blob/main/models/customerModel.js)     | Defines the data model for customers |
| [instructorModel.js](https://github.com/lalit-commits/growSkill-backend/blob/main/models/instructorModel.js) | Defines the data model for instructors |

</details>

<details closed><summary>Config</summary>

| File                                                                                                   | Summary                   |
| ---                                                                                                    | ---                       |
| [dbConnection.js](https://github.com/lalit-commits/growSkill-backend/blob/main/config/dbConnection.js) | Contains configurations, such as database connection settings |

</details>

<details closed><summary>Controllers</summary>

| File                                                                                                                        | Summary                   |
| ---                                                                                                                         | ---                       |
| [courseController.js](https://github.com/lalit-commits/growSkill-backend/blob/main/controllers/courseController.js)         | Controller responsible for handling course-related API endpoints |
| [customerController.js](https://github.com/lalit-commits/growSkill-backend/blob/main/controllers/customerController.js)     | Controller responsible for handling customer-related API endpoints |
| [instructorController.js](https://github.com/lalit-commits/growSkill-backend/blob/main/controllers/instructorController.js) | Controller responsible for handling instructor-related API endpoints |

</details>

<details closed><summary>Middleware</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
| [errorHandler.js](https://github.com/lalit-commits/growSkill-backend/blob/main/middleware/errorHandler.js)                 | Middleware function for error handling |
| [validateTokenHandler.js](https://github.com/lalit-commits/growSkill-backend/blob/main/middleware/validateTokenHandler.js) | Middleware function for token validation |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                         | Summary                   |
| ---                                                                                                          | ---                       |
| [courseRoute.js](https://github.com/lalit-commits/growSkill-backend/blob/main/routes/courseRoute.js)         | Defines API routes and connects them to course-related controllers |
| [instructorRoute.js](https://github.com/lalit-commits/growSkill-backend/blob/main/routes/instructorRoute.js) | Defines API routes and connects them to instructor-related controllers |
| [customerRoute.js](https://github.com/lalit-commits/growSkill-backend/blob/main/routes/customerRoute.js)     | Defines API routes and connects them to customer-related controllers |

</details>

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

To get started with the project, follow these steps:

### Installation

1. Clone the `growSkill-backend` repository:

   ```sh
   git clone https://github.com/lalit-commits/growSkill-backend
Navigate to the project directory:

```sh

cd growSkill-backend
Install the required dependencies:

```sh

npm install
Now you have the project and its dependencies installed.

### Running the Project
To run the project, execute the following command:

```sh

npm start
The server will start and be accessible at http://localhost:5000.

Testing
To run tests for the project, use the following command:

```sh

### npm test
This will execute the test suite for your application.



