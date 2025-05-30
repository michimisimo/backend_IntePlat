const supabase = require('../supabase/supabaseClient.js');
const TABLE = 'categorias';

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
        .eq('id_categoria', id)
        .single();

    if (error) throw new Error(error.message);
    return data;
}

async function create(sucursal) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert(sucursal)
        .single();

    if (error) throw new Error(error.message);
    return data;
}

async function update(id, sucursal) {
    const { data, error } = await supabase
        .from(TABLE)
        .update(sucursal)
        .eq('id_categoria', id)
        .single();

    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { data, error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id_categoria', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
}

module.exports = { getAll, getById, create, update, remove };
