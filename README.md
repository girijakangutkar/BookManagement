
# 📘 Book Management

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Render Status](https://img.shields.io/badge/Render-Live-brightgreen)](https://bookmanagement-kh07.onrender.com)
[![GitHub Actions Status](https://github.com/girijakangutkar/BookManagement/workflows/Node%20CI/badge.svg)](https://github.com/girijakangutkar/BookManagement/actions)

---

## 🌟 Project Summary

Book Management is a RESTful API built with Node.js, Express, and MongoDB, designed to efficiently manage a collection of books. It utilizes Redis for caching frequently accessed data and for optimized bulk insertion of new books. The application implements user authentication, comprehensive CRUD operations for books, and is thoroughly tested to ensure reliability.

---

## 🚀 Features

- **User Authentication:** Secure signup and login functionality with encrypted passwords using bcrypt.
  - Users can create accounts and securely log in to manage their book collections.

- **Book Management (CRUD):**  Full Create, Read, Update, and Delete functionality for book entries.
  - Add new books with details like name, author, and genre.
  - Retrieve, update, or delete existing book entries.

- **Bulk Book Addition:** Efficient bulk insertion of multiple books using Redis.
  - Allows for quick addition of large numbers of books to the database.

- **Redis Caching:** Implements Redis to cache frequently accessed book data.
  - Improves API response times by serving cached data.

- **Comprehensive Testing:** All API routes are thoroughly tested to ensure reliability and stability.
  - Provides confidence in the application's functionality and robustness.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Redis, Docker
- **Icons:** [Lucide React](https://lucide.dev/)

---

## ⚙️ Redis Usage

Redis is used in this project for two primary purposes:

1.  **Caching:** Frequently accessed book data is cached in Redis to reduce the load on the MongoDB database and improve response times.
2.  **Bulk Insertion:** When adding a large number of books, the data is first stored in Redis and then efficiently inserted into MongoDB in bulk.

---

## 📦 Installation

1.  **Clone the repository:**

    bash
    cd BookManagement
        > Create a `.env` file in the root directory and add the following:
    > bash
    npm start
    ### User Routes

- **`POST /signup`** - Register a new user.

  **Request Body:**

    json
    {
      "message": "User registered successfully",
      "user": {
        "name": "string",
        "email": "string",
        "_id": "string"
      }
    }
    - **`POST /login`** - Log in an existing user.

  **Request Body:**

    json
    {
      "message": "Login successful",
      "token": "string"
    }
    json
    {
      "message": "Book created successfully",
      "book": {
        "name": "string",
        "author": "string",
        "genre": "string",
        "_id": "string"
      }
    }
    json
    {
      "message": "Book updated successfully",
      "book": {
        "name": "string",
        "author": "string",
        "genre": "string",
        "_id": "string"
      }
    }
    ## 🚀 CI/CD with GitHub Actions

This project uses GitHub Actions for continuous integration and continuous deployment (CI/CD). The workflow is defined in `.github/workflows/node.js.yml`. It automatically runs tests on every push and pull request to the main branch and deploys the application to Render on every push to the main branch.

> Customize the workflow file according to your specific deployment needs.

---

## 🤝 Contributing

> We welcome contributions to the Book Management project! To contribute, please follow these guidelines:
>
> 1.  Fork the repository.
> 2.  Create a new branch for your feature or bug fix.
> 3.  Make your changes and write appropriate tests.
> 4.  Ensure all tests pass.
> 5.  Submit a pull request with a clear description of your changes.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Links

-   **Deployed Backend on Render:** [https://bookmanagement-kh07.onrender.com](https://bookmanagement-kh07.onrender.com)
-   **Swagger API Documentation:** [https://bookmanagement-kh07.onrender.com/api-docs/](https://bookmanagement-kh07.onrender.com/api-docs/)
-   **GitHub Project:** [https://github.com/girijakangutkar/BookManagement](https://github.com/girijakangutkar/BookManagement)
