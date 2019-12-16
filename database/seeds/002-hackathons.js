
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('hackathons').insert([
        {name: "Tom's Hackathon", description: "It's a great hackin' time", url: "https://www.tomshackathon.com", start_date: "02/09/2019", end_date: "02/13/2019", is_open: true}
      ]);
    });
};
