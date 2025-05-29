const express = require('express');
const router = express.Router();

// Importar y montar rutas específicas
const productosRoutes = require('./productos.routes.js');
const clientesRoutes = require('./clientes.routes.js');
const empleadosRoutes = require('./empleados.routes.js')
const sucursalesRoutes = require('./sucursales.routes.js')

router.use('/productos', productosRoutes);
router.use('/clientes', clientesRoutes);
router.use('/empleados', empleadosRoutes);
router.use('/sucuersales', sucursalesRoutes)

module.exports = router;
