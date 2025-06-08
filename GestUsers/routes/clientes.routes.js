const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller.js");

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gestionar clientes
 */

/**
 * @swagger
 * /apiBsnss/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */

/**
 * @swagger
 * /apiBsnss/clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Detalle del cliente
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * /apiBsnss/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cliente
 *               - usuario
 *             properties:
 *               cliente:
 *                 type: object
 *                 required:
 *                   - suscrito
 *                   - fecha_registro
 *                 properties:
 *                   suscrito:
 *                     type: boolean
 *                   fecha_registro:
 *                     type: string
 *                     format: date
 *               usuario:
 *                 type: object
 *                 required:
 *                   - nombre
 *                   - apellido
 *                   - correo
 *                   - contrasena_hash
 *                   - activo
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   correo:
 *                     type: string
 *                   contrasena_hash:
 *                     type: string
 *                   activo:
 *                     type: boolean
 *     responses:
 *       201:
 *         description: Cliente creado correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/clientes/{id}:
 *   put:
 *     summary: Actualizar un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cliente
 *               - usuario
 *             properties:
 *               cliente:
 *                 type: object
 *                 required:
 *                   - suscrito
 *                   - fecha_registro
 *                 properties:
 *                   suscrito:
 *                     type: boolean
 *                   fecha_registro:
 *                     type: string
 *                     format: date
 *               usuario:
 *                 type: object
 *                 required:
 *                   - nombre
 *                   - apellido
 *                   - correo
 *                   - contrasena_hash
 *                   - activo
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   correo:
 *                     type: string
 *                   contrasena_hash:
 *                     type: string
 *                   activo:
 *                     type: boolean
 *     responses:
 *       200:
 *         description: Cliente actualizado correctamente
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * /apiBsnss/clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado correctamente
 *       404:
 *         description: Cliente no encontrado
 */

/**
 * @swagger
 * /apiBsnss/clientes/login:
 *   post:
 *     summary: Iniciar sesión de un cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - contrasena_hash
 *             properties:
 *               correo:
 *                 type: string
 *               contrasena_hash:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 */

router.get("/", clientesController.getAll);
router.get("/:id", clientesController.getById);
router.post("/", clientesController.create);
router.put("/:id", clientesController.update);
router.delete("/:id", clientesController.remove);
router.post("/login", clientesController.login);

module.exports = router;
