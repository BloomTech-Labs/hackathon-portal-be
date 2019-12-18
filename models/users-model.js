const db = require('../database/db.js');

module.exports = {
    find,
    findByUsername,
    findByEmail,
    findById,
    updateUser,
    deleteUser
};

async function find() {
    return await db('users').select('id', 'username', 'email');
}

async function findById(id) {
    return await db('users').where({ id }).first().select('id', 'username', 'email');
}

async function findByUsername(username) {
    return await db('users').where({ username }).first().select('id', 'username', 'email');
}

async function findByEmail(email) {
    return await db('users').where({ email }).first().select('id', 'username', 'email');
}

async function updateUser(id, user) {
    await db('users')
        .where({ id })
        .update(user)
    return db('users')
        .where({ id })
        .first()
}

async function deleteUser(id) {
    await db('users')
        .where({ id })
        .del()
}