
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title: 'To-do List',
          description: "It's a to-do list",
          is_approved: true,
          front_end_spots: 10,
          back_end_spots: 3,
          ios_spots: 3,
          android_spots: 1,
          data_science_spots: 2,
          ux_spots: 1,
          creator_id: 1,
          hackathon_id: 1,
          is_solo: false
        },
        {
          title: 'Guidr',
          description: "It's an app",
          is_approved: true,
          front_end_spots: 10,
          back_end_spots: 3,
          ios_spots: 3,
          android_spots: 1,
          data_science_spots: 2,
          ux_spots: 1,
          creator_id: 5,
          hackathon_id: 1,
          is_solo: false
        },
        {
          title: 'Community Calendar',
          description: "It's a calendar",
          front_end_spots: 15,
          back_end_spots: 6,
          ios_spots: 3,
          android_spots: 6,
          data_science_spots: 3,
          ux_spots: 2,
          creator_id: 2,
          hackathon_id: 2,
          is_approved: false,
          is_solo: false
        },
        {
          title: 'Expat Journal',
          description: "It's a project",
          is_approved: true,
          front_end_spots: 0,
          back_end_spots: 0,
          ios_spots: 0,
          android_spots: 0,
          data_science_spots: 0,
          ux_spots: 0,
          creator_id: 0,
          hackathon_id: 3,
          is_solo: true,
          is_solo_and_taken: false
        },
      ]);
    });
};
