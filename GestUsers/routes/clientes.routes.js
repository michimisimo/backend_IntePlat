const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller.js');

router.get('/', clientesController.getAll);
router.get('/:id', clientesController.getById);
router.post('/', clientesController.create);
router.put('/:id', clientesController.update);
router.delete('/:id', clientesController.remove);
router.post('/login', clientesController.login)

module.exports = router;
