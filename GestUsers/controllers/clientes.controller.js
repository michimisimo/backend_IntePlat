const clientesService = require('../services/clientes.service');

async function getAll(req, res) {
    try {
        const data = await clientesService.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getById(req, res) {
    try {
        const data = await clientesService.getById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Cliente no encontrado' });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function create(req, res) {
    try {
        const data = await clientesService.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function update(req, res) {
    try {
        const data = await clientesService.update(req.params.id, req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function remove(req, res) {
    try {
        const data = await clientesService.remove(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, pass } = req.body;

        if (!email || !pass) {
            return res.status(400).json({ error: 'Email y contraseña son requeridos' });
        }

        const data = await clientesService.login(email, pass);

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getAll, getById, create, update, remove, login };
