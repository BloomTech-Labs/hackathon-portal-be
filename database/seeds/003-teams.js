
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { name: 'Team Pepe' },
        { name: 'Fruit Flies & Stuff' },
        { name: 'Clean Water' },
        { name: 'Quesadilla Finder' },
      ]);
    });
};
