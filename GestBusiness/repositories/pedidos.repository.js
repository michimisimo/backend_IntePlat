const supabase = require('../supabase/supabaseClient.js');
const TABLE = 'pedidos';

async function getAll() {
    const { data, error } = await supabase
        .from('pedidos') // o tu tabla principal
        .select(`*, clientes (*, usuarios(*)), detallepedido(*)`);

    if (error) throw new Error(error.message);
    return data;
}


async function insert(pedido) {
    const { data, error } = await supabase
        .from(TABLE)
        .insert([pedido])
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, datos) {
    const { data, error } = await supabase
        .from(TABLE)
        .update(datos)
        .eq('id_pedido', id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { error } = await supabase
        .from(TABLE)
        .delete()
        .eq('id_pedido', id);
    if (error) throw new Error(error.message);
}

async function pedidoById(id) {
    const { data, error } = await supabase
        .from(TABLE)
        .select(` *,detallepedido(*)`)
        .eq('id_pedido', id);

    if (error) throw new Error(error.message);
    return data;
}

module.exports = {
    getAll,
    insert,
    update,
    remove,
    pedidoById,
};
