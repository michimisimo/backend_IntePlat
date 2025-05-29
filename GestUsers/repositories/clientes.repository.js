const { supabase } = require('../supabase/supabaseClient');

const TABLE = 'clientes';

async function getAll() {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw new Error(error.message);
    return data;
}

async function getById(id) {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
}

async function create(cliente) {
    const { data, error } = await supabase.from(TABLE).insert(cliente).single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, cliente) {
    const { data, error } = await supabase.from(TABLE).update(cliente).eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { data, error } = await supabase.from(TABLE).delete().eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
}

module.exports = { getAll, getById, create, update, remove };
