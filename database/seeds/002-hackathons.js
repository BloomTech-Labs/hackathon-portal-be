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
                  'Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: true,
               organizer_id: 9
            },
            {
               name: "Bill's Hackathon",
               description: "It's a great hackin' time",
               url: 'https://www.billshackathon.com',
               location: 'Chicago, IL',
               start_date:
                  'Sun Jan 19 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               end_date:
                  'Thurs Jan 23 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
               is_open: false,
               organizer_id: 10
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
               is_open: true,
               organizer_id: 11
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
