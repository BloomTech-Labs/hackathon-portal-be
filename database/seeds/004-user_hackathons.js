
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_hackathons').insert([
        { hackathon_id: 1, user_id: 1, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end' },
        { hackathon_id: 2, user_id: 1, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end' },
        { hackathon_id: 3, user_id: 1, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end' },
        { hackathon_id: 4, user_id: 1, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end' },
        { hackathon_id: 5, user_id: 1, user_hackathon_role: 'participant', team_id: 1, developer_role: 'front-end' },
        { hackathon_id: 1, user_id: 2, user_hackathon_role: 'participant', team_id: 1, developer_role: 'back-end' },
        { hackathon_id: 2, user_id: 2, user_hackathon_role: 'participant', team_id: 1, developer_role: 'back-end' },
        { hackathon_id: 3, user_id: 2, user_hackathon_role: 'participant', team_id: 1, developer_role: 'back-end' },
        { hackathon_id: 4, user_id: 2, user_hackathon_role: 'participant', team_id: 1, developer_role: 'back-end' },
        { hackathon_id: 5, user_id: 2, user_hackathon_role: 'participant', team_id: 1, developer_role: 'back-end' },
        { hackathon_id: 1, user_id: 3, user_hackathon_role: 'organizer' },
        { hackathon_id: 2, user_id: 3, user_hackathon_role: 'organizer' },
        { hackathon_id: 3, user_id: 3, user_hackathon_role: 'organizer' },
        { hackathon_id: 4, user_id: 3, user_hackathon_role: 'organizer' },
        { hackathon_id: 5, user_id: 3, user_hackathon_role: 'organizer' },
        { hackathon_id: 1, user_id: 4, user_hackathon_role: 'judge' },
        { hackathon_id: 2, user_id: 4, user_hackathon_role: 'judge' },
        { hackathon_id: 3, user_id: 4, user_hackathon_role: 'judge' },
        { hackathon_id: 4, user_id: 4, user_hackathon_role: 'judge' },
        { hackathon_id: 5, user_id: 4, user_hackathon_role: 'judge' },
        { hackathon_id: 1, user_id: 5, user_hackathon_role: 'participant', team_id: 2, developer_role: 'UX' },
        { hackathon_id: 2, user_id: 5, user_hackathon_role: 'participant', team_id: 2, developer_role: 'UX' },
        { hackathon_id: 3, user_id: 5, user_hackathon_role: 'participant', team_id: 2, developer_role: 'UX' },
        { hackathon_id: 4, user_id: 5, user_hackathon_role: 'participant', team_id: 2, developer_role: 'UX' },
        { hackathon_id: 5, user_id: 5, user_hackathon_role: 'participant', team_id: 2, developer_role: 'UX' },
        { hackathon_id: 1, user_id: 6, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 2, user_id: 6, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 3, user_id: 6, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 4, user_id: 6, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 5, user_id: 6, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 1, user_id: 7, user_hackathon_role: 'participant', team_id: 3, developer_role: 'DS' },
        { hackathon_id: 2, user_id: 7, user_hackathon_role: 'participant', team_id: 1, developer_role: 'DS' },
        { hackathon_id: 3, user_id: 7, user_hackathon_role: 'participant', team_id: 3, developer_role: 'DS' },
        { hackathon_id: 4, user_id: 7, user_hackathon_role: 'participant', team_id: 2, developer_role: 'DS' },
        { hackathon_id: 5, user_id: 7, user_hackathon_role: 'participant', team_id: 3, developer_role: 'DS' },
        { hackathon_id: 1, user_id: 8, user_hackathon_role: 'judge' },
        { hackathon_id: 2, user_id: 8, user_hackathon_role: 'organizer' },
        { hackathon_id: 3, user_id: 8, user_hackathon_role: 'participant', team_id: 4, developer_role: 'front-end' },
        { hackathon_id: 4, user_id: 8, user_hackathon_role: 'participant', team_id: 4, developer_role: 'back-end' },
        { hackathon_id: 5, user_id: 8, user_hackathon_role: 'participant', team_id: 4, developer_role: 'DS' },
        { hackathon_id: 1, user_id: 9, user_hackathon_role: 'judge' },
        { hackathon_id: 2, user_id: 9, user_hackathon_role: 'organizer' },
        { hackathon_id: 3, user_id: 9, user_hackathon_role: 'participant', team_id: 4, developer_role: 'back-end' },
        { hackathon_id: 4, user_id: 9, user_hackathon_role: 'participant', team_id: 4, developer_role: 'front-end' },
        { hackathon_id: 5, user_id: 9, user_hackathon_role: 'participant', team_id: 4, developer_role: 'UX' },
      ]);
    });
};
 