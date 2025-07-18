# 📘 Book Management

---

Book management with redis and mongoDB.

- Redis for caching and bulk insertion
- MongoDB for data storage
- Tested all the routes
- Applied github actions

---

## Tools

- Version is controlled by gitHub
- Deployed on Render
- Redis
- Docker
- Node.js

## 🚀 Features

- Login and signUp feature with encrypted password using bcrypt.
- Edit and delete feature for books
- Bulk addition of books

---

## 🛠️ Tech Stack

- Backend: Node.js, Express
- Database: MongoDB, Redis, Docker
- Icons: Lucide React

---

## Env Secret

- MONGO_URI
- JWT_SECRET

## API endPoint

--User routes
post /signup
{

- name:String, required
- email:String, required
- password: String, required
  }

post /login
{

- email:String, required
- password: String, required
  }

post /notes
{

- name: String,
- author : String,
- genre: String
  }

put /notes/:id
{

- name: String,
- author : String,
- genre: String
  }

-get request
-delete request

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/girijakangutkar/BookManagement.git

# Navigate into the project directory
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start

#Deployed Backend on Render
https://bookmanagement-kh07.onrender.com

#Swagger API working UI
https://bookmanagement-kh07.onrender.com/api-docs/


#GitHub project link
https://github.com/girijakangutkar/BookManagement
```
