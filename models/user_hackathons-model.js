const db = require('../database/db.js');
module.exports = {
   findHackathonProjects,
   findHackathonAdmins,
   findUserProjectsByHackathon,
   insertHackathonInstance,
   findHackathonByUserId,
   findProjectParticipants,
   findRegistered
};

async function findHackathonProjects(hackathon_id) {
   return db('projects')
      .select(
         'projects.id as project_id',
         'projects.title as project_title',
         'projects.description as project_description',
         'front_end_spots',
         'back_end_spots',
         'ios_spots',
         'android_spots',
         'data_science_spots',
         'ux_spots'
      )
      .where({ hackathon_id });
}

async function findHackathonAdmins(hackathon_id) {
   return db('user_hackathons')
      .select('users.username', 'users.id as user_id', 'user_hackathon_role')
      .join('users', 'user_id', 'users.id')
      .whereNull('developer_role')
      .andWhere({ hackathon_id });
}

async function insertHackathonInstance(instance) {
   return db('user_hackathons').insert(instance);
}

async function findHackathonByUserId(user_id) {
   return await db('user_hackathons')
      .select(
         'hackathons.id as hackathon_id',
         'hackathons.name as hackathon_name',
         'user_hackathon_role',
         'developer_role',
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
         'title',
         'description',
         'hackathon_id'
      )
      .join('users', 'user_id', 'users.id')
      .where({ hackathon_id })
      .andWhere({ user_id });
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
      .where({ project_id });
}

async function findRegistered(hackathon_id, user_id) {
   return db('user_hackathons')
      .where({ user_id })
      .andWhere({ hackathon_id });
}
