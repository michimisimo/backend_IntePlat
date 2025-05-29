const sucursalesRepository = require('../repositories/sucursales.repository.js');

async function getAll() {
    return await sucursalesRepository.getAll();
}

async function getById(id) {
    return await sucursalesRepository.getById(id);
}

async function create(data) {
    return await sucursalesRepository.create(data);
}

async function update(id, data) {
    return await sucursalesRepository.update(id, data);
}

async function remove(id) {
    return await sucursalesRepository.remove(id);
}

module.exports = { getAll, getById, create, update, remove };
