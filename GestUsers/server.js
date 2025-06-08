require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerOptions");
const routes = require("./routes/routes");

app.use(express.json());
app.use("/apiUsers", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
