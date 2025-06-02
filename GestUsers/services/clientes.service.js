const clientesRepository = require("../repositories/clientes.repository.js");
const usuariosRepository = require("../repositories/usuarios.repository.js");

async function getAll() {
  return await clientesRepository.getAll();
}

async function getById(id) {
  return await clientesRepository.getById(id);
}

async function create(usuario) {
  try {
    const usuarioCreado = await usuariosRepository.create(usuario);
    try {
      return await clientesRepository.create(usuarioCreado.id_usuario);

    } catch (err) {
      console.error('problema al crear cliente en clientes.service')
      throw err
    }
  } catch (err) {
    console.error('problema al crear usuario en clientes.service')
    throw err
  }
}

async function update(id, data) {
  const cliente = await clientesRepository.update(id, data.cliente);

  if (data.usuario && cliente.id_usuario) {
    await usuariosRepository.update(cliente.id_usuario, data.usuario);
  }

  return cliente;
}

async function remove(id) {
  const cliente = await clientesRepository.getById(id);
  if (!cliente) throw new Error("Cliente no encontrado");

  await clientesRepository.remove(id);
  await usuariosRepository.remove(cliente.id_usuario);

  return { success: true };
}

async function login(correo, pass) {
  try {
    const cliente = await clientesRepository.login(correo);

    if (!cliente) {
      throw new Error("cliente no encontrado");
    }
    if (cliente.contrasena_hash !== pass) {
      throw new Error("Credenciales inválidas");
    }

    return cliente;
  } catch (err) {
    throw err;
  }
}

module.exports = { getAll, getById, create, update, remove, login };
