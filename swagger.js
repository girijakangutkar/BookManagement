const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book APIs",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url:
          "https://bookmanagement-kh07.onrender.com/" ||
          "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  // Path to files where you’ll annotate your routes with JSDoc
  apis: ["./routes/BookRouter.js", "./routes/UserRouter.js", "./server.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
