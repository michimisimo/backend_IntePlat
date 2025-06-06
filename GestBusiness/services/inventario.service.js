const inventarioRepository = require('../repositories/inventario.repository.js');

async function getAll() {
    return await inventarioRepository.getAll();
}

async function getById(id) {
    return await inventarioRepository.getById(id);
}

async function create(data) {
    return await inventarioRepository.create(data);
}

async function update(data) {
    return await inventarioRepository.update(data);
}

async function remove(id) {
    return await inventarioRepository.remove(id);
}

module.exports = { getAll, getById, create, update, remove };
