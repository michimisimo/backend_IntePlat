const productosRepository = require('../repositories/productos.repository.js');

async function obtenerProductos() {
    return await productosRepository.getAll();
}

async function crearProducto(datos) {
    return await productosRepository.insert(datos);
}

async function actualizarProducto(id, datos) {
    return await productosRepository.update(id, datos);
}

async function eliminarProducto(id) {
    return await productosRepository.remove(id);
}

async function productoById(id) {
    return await productosRepository.productoById(id);
}

module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    productoById,
};
