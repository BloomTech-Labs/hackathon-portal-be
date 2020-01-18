const db = require('../database/db.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
};



async function find() {
    return await db('projects')
}

async function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

async function add(team) {
    return db('projects')
        .insert(team, 'id')
        .then(ids => {
            const [id] = ids
            return findById(id)
        })
}

async function remove(id) {
    return db('projects')
        .where({ id })
        .del();
}

async function update(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes)
        .then(u => {
            return findById(id)
        })
}



