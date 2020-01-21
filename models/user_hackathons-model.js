const db = require('../database/db.js');
module.exports = {
   // findTeamUsers,
   // findTeamUsersNoH,
   findHackathonProjects,
   findHackathonAdmins,
   findUserProjectsByHackathon,
   // findTeamDevsByHackathon,
   insertHackathonInstance,
   findHackathonByUserId,
   findIndividualDevelopers,
   findProjectParticipants,
   findRegistered
};

// async function findTeamUsers(team_id, hackathon_id) {
//    return db('user_hackathons')
//       .select(
//          'users.id as user_id',
//          'users.username as username',
//          'user_hackathon_role',
//          'user_hackathons.hackathon_id',
//          'developer_role'
//       )
//       .join('users', 'user_id', 'users.id')
//       .where({ team_id })
//       .andWhere({ hackathon_id });
// }

async function findHackathonProjects(hackathon_id) {
   return db('projects')
      .select('projects.id as project_id', 'projects.title as project_title')
      .where({ hackathon_id });
}

// async function findTeamUsersNoH(team_id) {
//    return db('user_hackathons')
//       .select('users.id as user_id', 'users.username as username')
//       .join('users', 'user_id', 'users.id')
//       .where({ team_id });
// }

async function findHackathonAdmins(hackathon_id) {
   return db('user_hackathons')
      .select('users.username', 'users.id as user_id', 'user_hackathon_role')
      .join('users', 'user_id', 'users.id')
      .whereNull('developer_role')
      .andWhere({ hackathon_id });
}

// async function findTeamDevsByHackathon(team_id, hackathon_id) {
//    return db('user_hackathons')
//       .select(
//          'users.id as user_id',
//          'users.username as username',
//          'developer_role'
//       )
//       .join('users', 'user_id', 'users.id')
//       .where({ team_id })
//       .andWhere({ hackathon_id });
// }

async function insertHackathonInstance(instance) {
   return db('user_hackathons').insert(instance);
}

async function findHackathonByUserId(user_id) {
   return await db('user_hackathons')
      .select(
         'hackathons.id as hackathon_id',
         'hackathons.name as hackathon_name',
         // 'users.username',
         'user_hackathon_role',
         'developer_role',
         // 'users.id as user_id',
         'hackathons.start_date as start_date',
         'hackathons.end_date as end_date',
         'hackathons.description as hackathon_description'
      )
      .join('hackathons', 'hackathon_id', 'hackathons.id')
      .join('users', 'user_id', 'users.id')
      .where({ user_id });
}

async function findUserProjectsByHackathon(hackathon_id, user_id) {
   return await db('projects')
   .select(
      'users.id as user_id',
      'projects.id as project_id',
      'projects.title',
      'projects.description',
   )
   .join('users', 'user_id', 'users.id')
   .where({ hackathon_id })
   .andWhere({ user_id })
   .first()
}

async function findIndividualDevelopers(hackathon_id) {
   return db('user_hackathons')
      .select(
         'users.id as user_id',
         'users.username',
         'user_hackathon_role',
         'developer_role'
      )
      .join('users', 'user_id', 'users.id')
      .whereNull('team_id')
      .andWhere('user_hackathon_role', 'participant')
      .where({ hackathon_id });
}

async function findProjectParticipants(project_id) {
   return db('user_hackathons')
      .select(
         'users.id as user_id',
         'users.username as username',
         'user_hackathon_role',
         'user_hackathons.hackathon_id',
         'developer_role'
      )
      .join('users', 'user_id', 'users.id')
      .where({ project_id })
}

async function findRegistered(hackathon_id, user_id) {
   return db('user_hackathons')
   .where({ user_id })
   .andWhere({ hackathon_id })
}