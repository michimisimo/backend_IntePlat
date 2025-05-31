const supabase = require('../supabase/supabaseClient.js');
const TABLE = 'empleados';

async function getAll() {
    const { data, error } = await supabase
        .from(TABLE)
        .select('*');
    if (error) throw new Error(error.message);
    return data;
}

async function getById(id) {
    const { data, error } = await supabase
        .from(TABLE)
        .select('*')
        .eq('id_usuario', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function create(empleado) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert(empleado)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, empleado) {
    const { data, error } = await supabase
        .from(TABLE)
        .update(empleado)
        .eq('id_usuario', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { data, error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id_usuario', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function login(email) {
    const { data, error } = await supabase
        .from('usuarios')
        .select(` *,empleados(*)`)
        .eq('correo', email)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

module.exports = { getAll, getById, create, update, remove, login };
