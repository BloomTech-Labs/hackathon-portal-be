exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'lorenzo-simpson', email: "lsimp@hackathon-testing.com", password: 'testing'},
        {username: 'austin-powell', email: "apowe@hackathon-testing.com", password: 'testing'},
        {username: 'alec-blakeley', email: "ablak@hackathon-testing.com", password: 'testing'},
        {username: 'joe-schmoe', email: "joe@hackathon-testing.com", password: 'testing'},
        {username: 'santa-clause', email: "santa@hackathon-testing.com", password: 'testing'},
        {username: 'sandy-blakeley', email: "sandy@hackathon-testing.com", password: 'testing'},
        {username: 'bob-evans', email: "bevans@hackathon-testing.com", password: 'testing'},
        {username: 'john-adams', email: "jadams@hackathon-testing.com", password: 'testing'},
        {username: 'tom-mcdonald', email: "tom@hackathon-testing.com", password: 'testing'},
        {username: 'bill-mcdonald', email: "bill@hackathon-testing.com", password: 'testing'},
        {username: 'bob-mcdonald', email: "bob@hackathon-testing.com", password: 'testing'},
        {username: 'ted-mcdonald', email: "ted@hackathon-testing.com", password: 'testing'},
        {username: 'sarah-mcdonald', email: "sarah@hackathon-testing.com", password: 'testing'},
      ]);
    });
};
  