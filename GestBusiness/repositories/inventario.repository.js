const supabase = require('../supabase/supabaseClient.js');
const TABLE = 'inventario';

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
        .eq('sucursal_id', id)

    if (error) throw new Error(error.message);
    return data;
}

async function create(inventario) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert(inventario)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}

async function update(inventario) {
    const { id_sucursal, id_producto, stock_actual } = inventario;

    const { data, error } = await supabase
        .from(TABLE)
        .update({ stock_actual })
        .eq('sucursal_id', id_sucursal)
        .eq('producto_id', id_producto)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { data, error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id_inventario', id)
    if (error) throw new Error(error.message);
    return data;
}

module.exports = { getAll, getById, create, update, remove };
