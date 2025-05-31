const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');

router.get('/', empleadosController.getAll);
router.get('/:id', empleadosController.getById);
router.post('/', empleadosController.create);
router.put('/:id', empleadosController.update);
router.delete('/:id', empleadosController.remove);
router.post('/login', empleadosController.login)

module.exports = router;
