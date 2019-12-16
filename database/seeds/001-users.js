exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'lorenzo-simpson', password: 'testing'},
        {username: 'austin-powell', password: 'testing'},
        {username: 'alec-blakeley', password: 'testing'},
      ]);
    });
};
