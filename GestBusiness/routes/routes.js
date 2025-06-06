const express = require('express');
const router = express.Router();

// Importar y montar rutas específicas
const productosRoutes = require('./productos.routes.js');
const sucursalesRoutes = require('./sucursales.routes.js');
const categoriasRoutes = require('./categorias.routes.js');
const pedidosRoutes = require('./pedidos.routes.js')
const inventarioRoutes = require('./inventario.routes.js')

router.use('/productos', productosRoutes);
router.use('/sucursales', sucursalesRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/inventario', inventarioRoutes);

module.exports = router;
