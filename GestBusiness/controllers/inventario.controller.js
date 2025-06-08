const inventarioService = require('../services/inventario.service.js');

async function getAll(req, res) {
    try {
        const data = await inventarioService.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getById(req, res) {
    try {
        const data = await inventarioService.getById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Sucursal no encontrada' });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const data = await inventarioService.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const data = await inventarioService.update(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const data = await inventarioService.remove(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getAll, getById, create, update, remove };
