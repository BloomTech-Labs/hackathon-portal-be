const db = require('../database/db.js');

module.exports = {
    find,
    findUserByHackathon,
    findHackathonByUserId,
    findUsersByTeamId,
    findTeamsByHackathonId
};

async function find() {
    return await db('user_hackathons')
}

async function findUserByHackathon(hackathon_id) {
    return await db('user_hackathons').select('users.id as user_id', 'users.username', 'user_hackathon_role', 'developer_role')
    .join('users', 'user_id', 'users.id')
    // .leftJoin('teams', 'team_id', 'teams.id')
    .where({hackathon_id})
}

async function findHackathonByUserId(user_id) {
    return await db('user_hackathons').select('hackathons.name as hackathon_name', 'users.username', 'user_hackathon_role', 'developer_role', 'teams.id as team_id', 'teams.name as team_name', 'users.id as user_id')
    .join('hackathons', 'hackathon_id', 'hackathons.id')
    .join('users', 'user_id', 'users.id')
    .leftJoin('teams', 'team_id', 'teams.id')
    .where({ user_id })
}

async function findUsersByTeamId(team_id) {
    return await db('user_hackathons').select('hackathons.name as hackathon_name', 'users.username', 'user_hackathon_role', 'developer_role', 'teams.id as team_id', 'teams.name as team_name', 'users.id as user_id')
    .join('hackathons', 'hackathon_id', 'hackathons.id')
    .join('users', 'user_id', 'users.id')
    .leftJoin('teams', 'team_id', 'teams.id')
    .where({ team_id })
}

async function findTeamsByHackathonId(hackathon_id) {
    return await db('teams').select('teams.id as team_id', 'teams.name')
    .where({ hackathon_id })
}
