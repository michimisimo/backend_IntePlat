const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller.js");

/**
 * @swagger
 * tags:
 *   name: Inventario
 *   description: Endpoints para gestionar inventario de productos en sucursales
 */

/**
 * @swagger
 * /apiBsnss/inventario:
 *   get:
 *     summary: Obtener todos los registros de inventario
 *     tags: [Inventario]
 *     responses:
 *       200:
 *         description: Lista de inventario
 */

/**
 * @swagger
 * /apiBsnss/inventario/{id}:
 *   get:
 *     summary: Obtener un registro de inventario por ID
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del inventario
 *     responses:
 *       200:
 *         description: Detalle del inventario
 *       404:
 *         description: Registro no encontrado
 */

/**
 * @swagger
 * /apiBsnss/inventario:
 *   post:
 *     summary: Crear un nuevo registro de inventario
 *     tags: [Inventario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - producto_id
 *               - sucursal_id
 *               - stock_actual
 *             properties:
 *               producto_id:
 *                 type: integer
 *               sucursal_id:
 *                 type: integer
 *               stock_actual:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inventario creado correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/inventario:
 *   put:
 *     summary: Actualizar un registro de inventario existente
 *     tags: [Inventario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - producto_id
 *               - sucursal_id
 *               - stock_actual
 *             properties:
 *               producto_id:
 *                 type: integer
 *               sucursal_id:
 *                 type: integer
 *               stock_actual:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Inventario actualizado correctamente
 *       404:
 *         description: Registro no encontrado
 */

/**
 * @swagger
 * /apiBsnss/inventario/{id}:
 *   delete:
 *     summary: Eliminar un registro de inventario
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del inventario
 *     responses:
 *       200:
 *         description: Registro eliminado
 *       404:
 *         description: Registro no encontrado
 */

router.get("/", inventarioController.getAll);
router.get("/:id", inventarioController.getById);
router.post("/", inventarioController.create);
router.put("/", inventarioController.update);
router.delete("/:id", inventarioController.remove);

module.exports = router;
