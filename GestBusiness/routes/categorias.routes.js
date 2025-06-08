const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categorias.controller.js");

/**
 * @swagger
 * tags:
 *   name: Categorías
 *   description: Endpoints para gestionar categorías de productos
 */

/**
 * @swagger
 * /apiBsnss/categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categorías]
 *     responses:
 *       200:
 *         description: Lista de categorías
 */

/**
 * @swagger
 * /apiBsnss/categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Detalle de la categoría
 *       404:
 *         description: Categoría no encontrada
 */

/**
 * @swagger
 * /apiBsnss/categorias:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categorías]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/categorias/{id}:
 *   put:
 *     summary: Actualizar una categoría existente
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada correctamente
 *       404:
 *         description: Categoría no encontrada
 */

/**
 * @swagger
 * /apiBsnss/categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada
 *       404:
 *         description: Categoría no encontrada
 */

router.get("/", categoriasController.getAll);
router.get("/:id", categoriasController.getById);
router.post("/", categoriasController.create);
router.put("/:id", categoriasController.update);
router.delete("/:id", categoriasController.remove);

module.exports = router;
