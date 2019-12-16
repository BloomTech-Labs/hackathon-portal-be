
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('hackathons').insert([
        {name: "Tom's Hackathon", description: "It's a great hackin' time", url: "https://www.tomshackathon.com", start_date: "02/09/2019", end_date: "02/13/2019", is_open: true},
        {name: "Bill's Hackathon", description: "It's a great hackin' time", url: "https://www.billsshackathon.com", start_date: "02/09/2019", end_date: "02/15/2019", is_open: false},
        {name: "Bob's Hackathon", description: "It's a great hackin' time", url: "https://www.bobsshackathon.com", start_date: "02/03/2019", end_date: "02/12/2019", is_open: true}
      ]);
    });
};
