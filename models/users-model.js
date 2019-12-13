const db = require('../database/db.js');

module.exports = {
    find
};

async function find() {
    return await db('users').select('id', 'username');
}