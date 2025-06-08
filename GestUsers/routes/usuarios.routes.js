const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios-controller");
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para consultar usuarios
 */

/**
 * @swagger
 * /apiBsnss/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

/**
 * @swagger
 * /apiBsnss/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalle del usuario
 *       404:
 *         description: Usuario no encontrado
 */

router.get("/", usuariosController.getAll);
router.get("/:id", usuariosController.getById);

module.exports = router;
