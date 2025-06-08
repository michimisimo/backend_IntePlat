const supabase = require("../supabase/supabaseClient");
const TABLE = "usuarios";

async function create(usuario) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(usuario)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function update(id, usuario) {
  const { data, error } = await supabase
    .from(TABLE)
    .update(usuario)
    .select()
    .eq("id_usuario", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function remove(id) {
  const { error } = await supabase
    .from(TABLE)
    .update({ activo: false })
    .eq("id_usuario", id)
    .single();

  if (error) throw new Error(error.message);
  return true;
}

async function getAll() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("activo", "TRUE");
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

module.exports = { create, update, remove, getAll, getById };
