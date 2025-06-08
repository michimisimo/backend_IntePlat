// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Bsnss",
      version: "1.0.0",
      description: "Documentación de la API de Bsnss",
    },
  },
  apis: ["./routes/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
