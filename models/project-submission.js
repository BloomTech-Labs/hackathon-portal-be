const db = require('../database/db.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
};



async function find() {
    return await db('project_submission')
}

async function findById(project_id) {
    return db('project_submission')
        .where({ project_id })
        .first();
}

async function add(project) {
    return db('project_submission')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids
            return findById(id)
        })
}

async function remove(id) {
    return db('project_submission')
        .where({ id })
        .del();
}

async function update(id, changes) {
    return db('project_submission')
        .where({ id })
        .update(changes)
        .then(u => {
            return findById(id)
        })
}



