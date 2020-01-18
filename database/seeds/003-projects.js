
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
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
          user_id: 1,
          hackathon_id: 1,
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
          user_id: 5,
          hackathon_id: 1,
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
          user_id: 2,
          hackathon_id: 2,
          is_approved: false,
        },
        {
          title: 'Expat Journal',
          description: "It's a project",
          is_approved: true,
          front_end_spots: 3,
          back_end_spots: 1,
          ios_spots: 1,
          android_spots: 1,
          data_science_spots: 1,
          ux_spots: 1,
          user_id: 3,
          hackathon_id: 3,
        },
      ]);
    });
};
