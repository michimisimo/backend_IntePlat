const express = require("express");
const router = express.Router();
const controller = require("../controllers/pedidos.controller.js");

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Endpoints para gestionar pedidos
 */

/**
 * @swagger
 * /apiBsnss/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */

/**
 * @swagger
 * /apiBsnss/pedidos/{id}:
 *   get:
 *     summary: Obtener un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Detalle del pedido
 *       404:
 *         description: Pedido no encontrado
 */

/**
 * @swagger
 * /apiBsnss/pedidos:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_id:
 *                 type: string
 *               fecha_pedido:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *               tipo_entrega:
 *                 type: string
 *               direccion_entrega:
 *                 type: string
 *               sucursal_retiro:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pedido creado correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/pedidos/{id}:
 *   put:
 *     summary: Actualizar un pedido existente
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_id:
 *                 type: string
 *               fecha_pedido:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *               tipo_entrega:
 *                 type: string
 *               direccion_entrega:
 *                 type: string
 *               sucursal_retiro:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pedido actualizado correctamente
 *       404:
 *         description: Pedido no encontrado
 */

/**
 * @swagger
 * /apiBsnss/pedidos/{id}:
 *   delete:
 *     summary: Eliminar un pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido eliminado
 *       404:
 *         description: Pedido no encontrado
 */

router.get("/", controller.listarPedidos);
router.get("/:id", controller.pedidoById);
router.post("/", controller.crearPedido);
router.put("/:id", controller.actualizarPedido);
router.delete("/:id", controller.eliminarPedido);

module.exports = router;
