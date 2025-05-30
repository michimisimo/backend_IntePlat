const supabase = require('../supabase/supabaseClient.js');
const TABLE = 'productos';

async function getAll() {
    const { data, error } = await supabase
        .from(TABLE)
        .select(` *,precioshistoricos(*)`)
    if (error) throw new Error(error.message);
    return data;
}

async function insert(producto) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert([producto])
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, datos) {
    const { data, error } = await supabase
        .from(TABLE)
        .update(datos)
        .eq('id_producto', id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id_producto', id);
    if (error) throw new Error(error.message);
}

async function productoById(id) {
    console.log(id)
    const { data, error } = await supabase
        .from(TABLE)
        .select(` *,precioshistoricos(*)`)
        .eq('id_producto', id);

    if (error) throw new Error(error.message);
    return data;
}

module.exports = {
    getAll,
    insert,
    update,
    remove,
    productoById,
};
