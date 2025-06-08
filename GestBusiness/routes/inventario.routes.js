const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller.js');

router.get('/', inventarioController.getAll);
router.get('/:id', inventarioController.getById);
router.post('/', inventarioController.create);
router.put('/', inventarioController.update);
router.delete('/:id', inventarioController.remove);

module.exports = router;