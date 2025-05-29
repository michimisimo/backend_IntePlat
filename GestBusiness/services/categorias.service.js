const categoriasRepository = require('../repositories/categorias.repository.js');

async function getAll() {
    return await categoriasRepository.getAll();
}

async function getById(id) {
    return await categoriasRepository.getById(id);
}

async function create(data) {
    return await categoriasRepository.create(data);
}

async function update(id, data) {
    return await categoriasRepository.update(id, data);
}

async function remove(id) {
    return await categoriasRepository.remove(id);
}

module.exports = { getAll, getById, create, update, remove };
