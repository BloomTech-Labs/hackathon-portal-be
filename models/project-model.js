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

async function add(project) {
    return db('projects')
        .insert(project, 'id')
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



