const db = require('../database/db.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update
};

async function find() {
    return await db('teams')
}

async function findById(id) {
    return db('teams')
        .where({ id })
        .first();
}

async function add(team) {
    return db('teams')
        .insert(team, 'id')
        .then(ids => {
            const [id] = ids
            return findById(id)
        })
}

async function remove(id) {
    return db('teams')
        .where({ id })
        .del();
}

async function update(changes, id) {
    return db('teams')
        .where({ id })
        .update(changes);
}

