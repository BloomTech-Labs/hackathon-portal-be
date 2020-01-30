exports.seed = function(knex) {
   // Deletes ALL existing entries
   return knex('hackathons')
      .del()
      .then(function() {
         // Inserts seed entries
         return knex('hackathons').insert([
            {
               name: "Tom's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.tomshackathon.com',
               location: 'Denver, CO',
               start_date:
                  'Mon Apr 6 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Wed Apr 8 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: true,
               organizer_id: 9,
               max_team_participants: 20,
            },
            {
               name: "Bill's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.billshackathon.com',
               location: 'Chicago, IL',
               start_date:
                  'Mon Apr 20 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Wed Apr 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: true,
               organizer_id: 10,
               max_team_participants: 20,
            },
            {
               name: "Bob's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.bobsshackathon.com',
               location: 'Austin, TX',
               start_date:
                  'Mon Jan 20 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Fri Jan 24 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: false,
               organizer_id: 11,
               max_team_participants: 35,
            },
            {
               name: "Ted's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.tedshackathon.com',
               location: 'Raleigh, NC',
               start_date:
                  'Sun Dec 1 2019 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Tues Dec 3 2019 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: true,
               organizer_id: 12
            },
            {
               name: "Sarah's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.sarahshackathon.com',
               location: 'Remote',
               start_date:
                  'Tues Oct 1 2019 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Sat Oct 5 2019 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: true,
               organizer_id: 13
            }
         ]);
      });
};
