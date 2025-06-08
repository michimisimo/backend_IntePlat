const express = require("express");
const router = express.Router();
const sucursalesController = require("../controllers/sucursales.controller.js");

/**
 * @swagger
 * tags:
 *   name: Sucursales
 *   description: Endpoints para gestionar sucursales
 */

/**
 * @swagger
 * /apiBsnss/sucursales:
 *   get:
 *     summary: Obtener todas las sucursales
 *     tags: [Sucursales]
 *     responses:
 *       200:
 *         description: Lista de sucursales
 */

/**
 * @swagger
 * /apiBsnss/sucursales/{id}:
 *   get:
 *     summary: Obtener una sucursal por ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sucursal
 *     responses:
 *       200:
 *         description: Detalle de la sucursal
 *       404:
 *         description: Sucursal no encontrada
 */

/**
 * @swagger
 * /apiBsnss/sucursales:
 *   post:
 *     summary: Crear una nueva sucursal
 *     tags: [Sucursales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               ciudad:
 *                 region: string
 *               ventas_totales:
 *                 type: number
 *               pedidos:
 *                 type: number
 *
 *     responses:
 *       201:
 *         description: Sucursal creada correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/sucursales/{id}:
 *   put:
 *     summary: Actualizar una sucursal existente
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sucursal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               ciudad:
 *                 region: string
 *               ventas_totales:
 *                 type: number
 *               pedidos:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sucursal actualizada correctamente
 *       404:
 *         description: Sucursal no encontrada
 */

/**
 * @swagger
 * /apiBsnss/sucursales/{id}:
 *   delete:
 *     summary: Eliminar una sucursal
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sucursal
 *     responses:
 *       200:
 *         description: Sucursal eliminada
 *       404:
 *         description: Sucursal no encontrada
 */

router.get("/", sucursalesController.getAll);
router.get("/:id", sucursalesController.getById);
router.post("/", sucursalesController.create);
router.put("/:id", sucursalesController.update);
router.delete("/:id", sucursalesController.remove);

module.exports = router;
