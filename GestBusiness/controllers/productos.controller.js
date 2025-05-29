const productosService = require('../services/productos.service.js');

async function listarProductos(req, res) {
    try {
        const productos = await productosService.obtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearProducto(req, res) {
    try {
        const nuevo = await productosService.crearProducto(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarProducto(req, res) {
    const { id } = req.params;
    try {
        const actualizado = await productosService.actualizarProducto(id, req.body);
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarProducto(req, res) {
    const { id } = req.params;
    try {
        await productosService.eliminarProducto(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};
