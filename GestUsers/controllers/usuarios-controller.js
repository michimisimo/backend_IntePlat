const usuariosService = require("../services/usuarios.service");

async function getAll(req, res) {
  try {
    const data = await usuariosService.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const data = await usuariosService.getById(req.params.id);
    if (!data) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, getById };
