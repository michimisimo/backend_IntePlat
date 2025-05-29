const sucursalesService = require('../services/sucursales.service');

async function getAll(req, res) {
    try {
        const data = await sucursalesService.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getById(req, res) {
    try {
        const data = await sucursalesService.getById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Sucursal no encontrada' });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const data = await sucursalesService.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const data = await sucursalesService.update(req.params.id, req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const data = await sucursalesService.remove(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getAll, getById, create, update, remove };
