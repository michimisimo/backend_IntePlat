const express = require('express');
const router = express.Router();
const controller = require('../controllers/productos.controller.js');

router.get('/', controller.listarProductos);
router.get('/:id', controller.productoById);
router.post('/', controller.crearProducto);
router.put('/:id', controller.actualizarProducto);
router.delete('/:id', controller.eliminarProducto);

module.exports = router;
