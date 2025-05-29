const express = require('express');
const router = express.Router();

// Importar y montar rutas específicas
const productosRoutes = require('./productos.routes.js');
const sucursalesRoutes = require('./sucursales.routes.js');

router.use('/productos', productosRoutes);
router.use('/sucuersales', sucursalesRoutes);

module.exports = router;
