const db = require('../database/db');
module.exports = {
    find,
}

async function find() {
    return await db('hackathons')
}
