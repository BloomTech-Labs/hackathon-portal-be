const db = require('../database/db.js');

module.exports = {
    find,
    findByHackathon
};

async function find() {
    return await db('user_hackathons')
}

async function findByHackathon(hackathon_id) {
    return await db('user_hackathons').select('hackathons.name as hackathon_name', 'users.username', 'user_hackathon_role', 'developer_role', 'teams.name as team_name', 'users.id as user_id')
    .join('hackathons', 'hackathon_id', 'hackathons.id')
    .join('users', 'user_id', 'users.id')
    .leftJoin('teams', 'team_id', 'teams.id')
    .where({ hackathon_id })
}

