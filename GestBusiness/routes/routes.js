const express = require('express');
const router = express.Router();

// Importar y montar rutas específicas
const productosRoutes = require('./productos.routes.js');
const sucursalesRoutes = require('./sucursales.routes.js');
const categoriasRoutes = require('./categorias.routes.js');
const pedidosRoutes = require('./pedidos.routes.js')

router.use('/productos', productosRoutes);
router.use('/sucursales', sucursalesRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/pedidos', pedidosRoutes)

module.exports = router;
