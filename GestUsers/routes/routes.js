const express = require("express");
const router = express.Router();

// Importar y montar rutas específicas
const clientesRoutes = require("./clientes.routes.js");
const empleadosRoutes = require("./empleados.routes.js");
const usuariosRoutes = require("./usuarios.routes.js");
router.use("/clientes", clientesRoutes);
router.use("/empleados", empleadosRoutes);
router.use("/usuarios", usuariosRoutes);

module.exports = router;
