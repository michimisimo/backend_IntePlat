require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const routes = require("./routes/routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerOptions");
app.use(cors());
app.use(express.json());
app.use("/apiBsnss", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
