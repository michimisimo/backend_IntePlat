const pedidosRepository = require('../repositories/pedidos.repository.js');

async function obtenerPedidos() {
    return await pedidosRepository.getAll();
}

async function crearPedido(datos) {
    return await pedidosRepository.insert(datos);
}

async function actualizarPedido(id, datos) {
    return await pedidosRepository.update(id, datos);
}

async function eliminarPedido(id) {
    return await pedidosRepository.remove(id);
}

async function pedidoById(id) {
    return await pedidosRepository.pedidoById(id);
}

module.exports = {
    obtenerPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido,
    pedidoById,
};
