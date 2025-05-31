const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios-controller");

router.get("/", usuariosController.getAll);
router.get("/:id", usuariosController.getById);

module.exports = router;
