const empleadosRepository = require("../repositories/empleados.repository");
const usuariosRepository = require("../repositories/usuarios.repository");

async function getAll() {
  return await empleadosRepository.getAll();
}

async function getById(id) {
  return await empleadosRepository.getById(id);
}

async function create(usuario, empleado) {
  console.log(usuario);

  try {
    const existente = await empleadosRepository.login(usuario.correo);

    let id_usuario;

    if (existente) {
      const usuarioData = {
        ...usuario,
        id_usuario: existente.id_usuario,
        activo: true,
      };

      id_usuario = existente.id_usuario;

      await usuariosRepository.update(id_usuario, usuarioData);

      return await empleadosRepository.update(id_usuario, empleado);
    } else {
      const usuariocreado = await usuariosRepository.create(usuario);
      id_usuario = usuariocreado.id_usuario;

      const empleadoData = {
        ...empleado,
        id_usuario: id_usuario,
      };

      return await empleadosRepository.create(empleadoData);
    }
  } catch (err) {
    throw new Error(`Error al crear usuario y empleado: ${err.message}`);
  }
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
  try {
    if (await usuariosRepository.remove(id)) {
      return { success: true };
    }
  } catch (err) {
    throw new Error(`Error al eliminar usuario: ${err.message}`);
  }
}

async function login(correo, pass) {
  try {
    const empleado = await empleadosRepository.login(correo);

    if (!empleado) {
      throw new Error("Empleado no encontrado");
    }
    if (empleado.contrasena_hash !== pass) {
      throw new Error("Credenciales inválidas");
    }

    return empleado;
  } catch (err) {
    throw err;
  }
}

module.exports = { getAll, getById, create, update, remove, login };
