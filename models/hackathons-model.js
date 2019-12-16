const db = require('../database/db');
module.exports = {
    find,
    findById
}

async function find() {
    return await db('hackathons')
}

async function findById(id) {
    return await db('hackathons').where({ id }).first()
}
