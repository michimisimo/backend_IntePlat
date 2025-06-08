const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller");

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Endpoints para gestionar empleados
 */

/**
 * @swagger
 * /apiBsnss/empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 */

/**
 * @swagger
 * /apiBsnss/empleados/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Detalle del empleado
 *       404:
 *         description: Empleado no encontrado
 */

/**
 * @swagger
 * /apiBsnss/empleados:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - empleado
 *               - usuario
 *             properties:
 *               empleado:
 *                 type: object
 *                 required:
 *                   - rol
 *                   - rut
 *                   - sucursal_id
 *                 properties:
 *                   rol:
 *                     type: string
 *                   rut:
 *                     type: string
 *                   sucursal_id:
 *                     type: integer
 *               usuario:
 *                 type: object
 *                 required:
 *                   - correo
 *                   - contrasena_hash
 *                   - nombre
 *                   - apellido
 *                   - activo
 *                 properties:
 *                   correo:
 *                     type: string
 *                   contrasena_hash:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   activo:
 *                     type: boolean
 *     responses:
 *       201:
 *         description: Empleado creado correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /apiBsnss/empleados/{id}:
 *   put:
 *     summary: Actualizar un empleado existente
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - empleado
 *               - usuario
 *             properties:
 *               empleado:
 *                 type: object
 *                 required:
 *                   - rol
 *                   - rut
 *                   - sucursal_id
 *                 properties:
 *                   rol:
 *                     type: string
 *                   rut:
 *                     type: string
 *                   sucursal_id:
 *                     type: integer
 *               usuario:
 *                 type: object
 *                 required:
 *                   - correo
 *                   - contrasena_hash
 *                   - nombre
 *                   - apellido
 *                   - activo
 *                 properties:
 *                   correo:
 *                     type: string
 *                   contrasena_hash:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   activo:
 *                     type: boolean
 *     responses:
 *       200:
 *         description: Empleado actualizado correctamente
 *       404:
 *         description: Empleado no encontrado
 */

/**
 * @swagger
 * /apiBsnss/empleados/{id}:
 *   delete:
 *     summary: Eliminar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado eliminado correctamente
 *       404:
 *         description: Empleado no encontrado
 */

/**
 * @swagger
 * /apiBsnss/empleados/login:
 *   post:
 *     summary: Iniciar sesión de un empleado
 *     tags: [Empleados]
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
 *               pass:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 */

router.get("/", empleadosController.getAll);
router.get("/:id", empleadosController.getById);
router.post("/", empleadosController.create);
router.put("/:id", empleadosController.update);
router.delete("/:id", empleadosController.remove);
router.post("/login", empleadosController.login);

module.exports = router;
