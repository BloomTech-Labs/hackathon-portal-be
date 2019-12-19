const db = require('../database/db.js');
module.exports = {
    findTeamUsers,
    findTeamUsersNoH,
    findHackathonTeams,
    findHackathonAdmins,
    findTeamDevsByHackathon,
    insertHackathonInstance,
    findHackathonByUserId,
    findIndividualDevelopers,
}

async function findTeamUsers(team_id, hackathon_id) {
    return db('user_hackathons')
        .select('users.id as user_id', 'users.username as username', 'user_hackathon_role', 'user_hackathons.hackathon_id', 'developer_role')
        .join('users', 'user_id', 'users.id')
        .where({ team_id }).andWhere({ hackathon_id })
}

async function findHackathonTeams(hackathon_id) {
    return db('teams').select('teams.id as team_id', 'teams.name as team_name')
        .join('user_hackathons', 'team_id', 'teams.id')
        .where({ hackathon_id })
}

async function findTeamUsersNoH(team_id) {
    return db('user_hackathons')
        .select('users.id as user_id', 'users.username as username')
        .join('users', 'user_id', 'users.id')
        .where({ team_id })
}

async function findHackathonAdmins(hackathon_id) {
    return db('user_hackathons').select('users.username', 'users.id as user_id', 'user_hackathon_role')
        .join('users', 'user_id', 'users.id')
        .whereNull('developer_role').andWhere({ hackathon_id })
}

async function findTeamDevsByHackathon(team_id, hackathon_id) {
    return db('user_hackathons')
        .select('users.id as user_id', 'users.username as username', 'developer_role')
        .join('users', 'user_id', 'users.id')
        .where({ team_id }).andWhere({ hackathon_id })
}


async function insertHackathonInstance(instance) {
    return db('user_hackathons')
        .insert(instance)
}

async function findHackathonByUserId(user_id) {
    return await db('user_hackathons').select('hackathons.name as hackathon_name', 'users.username', 'user_hackathon_role', 'developer_role', 'teams.id as team_id', 'teams.name as team_name', 'users.id as user_id')
        .join('hackathons', 'hackathon_id', 'hackathons.id')
        .join('users', 'user_id', 'users.id')
        .leftJoin('teams', 'team_id', 'teams.id')
        .where({ user_id })
}

async function findIndividualDevelopers(hackathon_id) {
    return db('user_hackathons').select('users.id as user_id', 'users.username', 'user_hackathon_role', 'developer_role')
    .join('users', 'user_id', 'users.id')
    .whereNull('team_id')
    .andWhere('user_hackathon_role', 'participant')
    .where({ hackathon_id })
}