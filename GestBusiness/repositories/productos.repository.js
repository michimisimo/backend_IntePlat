const supabase = require('../supabase/supabaseClient.js');

async function getAll() {
    const { data, error } = await supabase
        .from('productos')
        .select(` *,precioshistoricos(*)`);

    if (error) throw new Error(error.message);
    return data;
}

async function insert(producto) {
    const { data, error } = await supabase
        .from('productos')
        .insert([producto])
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, datos) {
    const { data, error } = await supabase
        .from('productos')
        .update(datos)
        .eq('id', id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id);
    if (error) throw new Error(error.message);
}

module.exports = {
    getAll,
    insert,
    update,
    remove,
};
