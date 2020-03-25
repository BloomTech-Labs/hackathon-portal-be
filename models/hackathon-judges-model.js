const db = require('../database/db');
module.exports = {
    find,
    findBySubmissionId,
    findById,
    insert,
    update,
    remove
}

async function find() {
    return await db('hackathon_judges')
}

async function findById(id) {
    const judged = await db('hackathon_judges').where({ id }).first()
    if (judged) return judged
    return -1
}

async function findBySubmissionId(project_submission_id) {
    const judged = await db('hackathon_judges').where({ project_submission_id })
    if (judged) return judged
    return -1
}

async function insert(judged) {
    try {
        const [id] = await db('hackathon_judges')
            .returning('id')
            .insert(judged)
            return findById(id)
    } catch (error) {
        console.log(error);
        return { error };
    }
}

async function update(id, changes) {
    await db('hackathon_judges')
        .where({ id })
        .update(changes)
    return db('hackathon_judges')
        .where({ id })
        .first()
}

async function remove(id) {
    return db('hackathon_judges')
        .where({ id })
        .del();
}