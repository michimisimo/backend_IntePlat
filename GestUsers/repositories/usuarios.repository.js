const { supabase } = require('../supabase/supabaseClient');
const TABLE = 'usuarios';

async function create(usuario) {
    const { data, error } = await supabase.from(TABLE).insert(usuario).single();
    if (error) throw new Error(error.message);
    return data;
}

async function update(id, usuario) {
    const { data, error } = await supabase.from(TABLE).update(usuario).eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
}

async function remove(id) {
    const { data, error } = await supabase.from(TABLE).delete().eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
}

module.exports = { create, update, remove };
