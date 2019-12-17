const db = require('../database/db');
module.exports = {
    find,
    findById
}

async function find() {
    return await db('hackathons')
}

async function findById(id) {
    const hack =  await db('hackathons').where({ id }).first()
    if (hack) return hack
    return -1
}
