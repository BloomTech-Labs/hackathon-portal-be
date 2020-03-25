
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackathon_judges').del()
    .then(function () {
      // Inserts seed entries
      return knex('hackathon_judges').insert([
       { user_id: 4, hackathon_id: 1, project_submission_id: 1, feedback: 'what', score: 10},
       { user_id: 5, hackathon_id: 1, project_submission_id: 1, feedback: 'nice', score: 8},
       { user_id: 6, hackathon_id: 1, project_submission_id: 1, feedback: 'hello', score: 10},
       { user_id: 7, hackathon_id: 1, project_submission_id: 1, feedback: 'cool', score: 10}
      ]);
    });
};
