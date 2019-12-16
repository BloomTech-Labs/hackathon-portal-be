
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_hackathons').insert([
        {hackathon_id: 1, user_id: 1, user_hackathon_role: 'judge', team_id: 1},
        {hackathon_id: 2, user_id: 2, user_hackathon_role: 'organizer', team_id: 1},
        {hackathon_id: 2, user_id: 3, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end'},
        {hackathon_id: 3, user_id: 1, user_hackathon_role: 'organizer'},
        {hackathon_id: 3, user_id: 2, user_hackathon_role: 'participant', team_id: 2, developer_role: 'back-end'}
      ]);
    });
};
