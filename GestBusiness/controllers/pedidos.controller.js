const pedidosService = require('../services/pedidos.service.js');

async function listarPedidos(req, res) {
    try {
        const pedidos = await pedidosService.obtenerPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearPedido(req, res) {
    try {
        const nuevo = await pedidosService.crearPedido(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarPedido(req, res) {
    const { id } = req.params;
    try {
        const actualizado = await pedidosService.actualizarPedido(id, req.body);
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarPedido(req, res) {
    const { id } = req.params;
    try {
        await pedidosService.eliminarPedido(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function pedidoById(req, res) {
    const { id } = req.params;
    try {
        const pedido = await pedidosService.pedidoById(id);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido,
    pedidoById,
};
