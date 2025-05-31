const usuariosRepository = require("../repositories/usuarios.repository");

async function getAll() {
  return await usuariosRepository.getAll();
}

async function getById(id) {
  return await usuariosRepository.getById(id);
}
module.exports = { getAll, getById };
