
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { name: 'Team Pepe', hackathon_id: 1 },
        { name: 'Fruit Flies & Stuff', hackathon_id: 1 },
        { name: 'Clean Water', hackathon_id: 1 },
        { name: 'Quesadilla Finder', hackathon_id: 1 },
        { name: 'Team Pepe', hackathon_id: 2 },
        { name: 'Fruit Flies & Stuff', hackathon_id: 2 },
        { name: 'Clean Water', hackathon_id: 2 },
        { name: 'Quesadilla Finder', hackathon_id: 2 },
        { name: 'Team Pepe', hackathon_id: 3 },
        { name: 'Fruit Flies & Stuff', hackathon_id: 3 },
        { name: 'Clean Water', hackathon_id: 3 },
        { name: 'Quesadilla Finder', hackathon_id: 3 }
      ]);
    });
};
