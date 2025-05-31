require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const routes = require("./routes/routes");
app.use(cors());
app.use(express.json());
app.use("/apiBsnss", routes); // todas las rutas comienzan con /apiBsnss

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
