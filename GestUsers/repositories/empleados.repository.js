const supabase = require("../supabase/supabaseClient.js");
const TABLE = "empleados";

async function getAll() {
  const { data, error } = await supabase
    .from(TABLE)
    .select(`*, usuarios!inner(correo, nombre, apellido)`)
    .eq("usuarios.activo", true);

  if (error) throw new Error(error.message);
  return data;
}

async function getById(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .select(`*, usuarios!inner(correo, nombre, apellido)`)
    .eq("id_usuario", id)
    .eq("usuarios.activo", true)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

async function create(empleado) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(empleado)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function update(id, empleado) {
  const { data, error } = await supabase
    .from(TABLE)
    .update(empleado)
    .select()
    .eq("id_usuario", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function login(email) {
  const { data, error } = await supabase
    .from("usuarios")
    .select(`*, empleados(*)`)
    .eq("correo", email);

  if (error) throw new Error(error.message);
  if (!data || data.length === 0) return null;
  if (data.length > 1)
    throw new Error("Correo duplicado: múltiples usuarios con ese correo");

  return data[0];
}

module.exports = { getAll, getById, create, update, login };
