exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'lorenzo-simpson', email: "lsimp@hackathon-testing.com", password: 'testing'},
        {username: 'austin-powell', email: "apowe@hackathon-testing.com", password: 'testing'},
        {username: 'alec-blakeley', email: "ablak@hackathon-testing.com", password: 'testing'},
      ]);
    });
};
