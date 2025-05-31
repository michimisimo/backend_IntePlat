const empleadosRepository = require('../repositories/empleados.repository');
const usuariosRepository = require('../repositories/usuarios.repository'); // asegúrate de tenerlo

async function getAll() {
    return await empleadosRepository.getAll();
}

async function getById(id) {
    return await empleadosRepository.getById(id);
}

async function create(data) {
    // Crear primero el usuario
    const usuario = await usuariosRepository.create(data.usuario);

    // Luego crear el empleado con la referencia al usuario
    const empleadoData = {
        ...data.empleado,
        id_usuario: usuario.id
    };

    return await empleadosRepository.create(empleadoData);
}

async function update(id, data) {
    // Actualiza datos del empleado
    const empleado = await empleadosRepository.update(id, data.empleado);

    // Actualiza datos del usuario asociado si se proveen
    if (data.usuario && empleado.id_usuario) {
        await usuariosRepository.update(empleado.id_usuario, data.usuario);
    }

    return empleado;
}

async function remove(id) {
    // Eliminar empleado y su usuario asociado (cascade manual)
    const empleado = await empleadosRepository.getById(id);
    if (!empleado) throw new Error('Empleado no encontrado');

    await empleadosRepository.remove(id);
    await usuariosRepository.remove(empleado.id_usuario);

    return { success: true };
}

async function login(correo, pass) {
    try {
        const empleado = await empleadosRepository.login(correo);

        if (!empleado) {
            throw new Error('Empleado no encontrado');
        }
        if (empleado.contrasena_hash !== pass) {
            throw new Error('Credenciales inválidas');
        }

        return empleado;
    } catch (err) {
        throw err;
    }
}

module.exports = { getAll, getById, create, update, remove, login };
