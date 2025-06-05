const supabase = require("../supabase/supabaseClient");

const TABLE = "clientes";

async function getAll() {
  const { data, error } = await supabase.from(TABLE).select("*");
  if (error) throw new Error(error.message);
  return data;
}

async function getById(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id_usuario", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function create(id_usuario) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert({ id_usuario })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function update(id, cliente) {
  const { data, error } = await supabase
    .from(TABLE)
    .update(cliente)
    .select()
    .eq("id_usuario", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function remove(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id_usuario", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function login(email) {
  const { data, error } = await supabase
    .from("usuarios")
    .select(` *,clientes(*)`)
    .eq("correo", email)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

module.exports = { getAll, getById, create, update, remove, login };
