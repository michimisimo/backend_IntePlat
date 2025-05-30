const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidos.controller.js');

router.get('/', controller.listarPedidos);
router.get('/:id', controller.pedidoById);
router.post('/', controller.crearPedido);
router.put('/:id', controller.actualizarPedido);
router.delete('/:id', controller.eliminarPedido);

module.exports = router;
