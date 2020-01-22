const request = require('supertest');
const server = require('../Api/server');
const db = require('../database/db');

describe('/hackathons endpoints', () => {
   beforeAll(async () => {
      await db('teams').truncate();
   });
   let token =
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5qZEROREUxUmtWR01rUXdRa0l4UWtWR05EWkVNalU0TlRKR1FUVTVNemc1TmpORVF6QkZPQSJ9.eyJpc3MiOiJodHRwczovL2hhY2thdGhvbnBvcnRhbC5hdXRoMC5jb20vIiwic3ViIjoiSzJQSmg3M3E0MXlGcnlBNkVKZHI3Q3lxM25WcXYxdm9AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaGFja2F0aG9uLXBvcnRhbC5oZXJva3VhcHAuY29tLyIsImlhdCI6MTU3OTcxNTAwNiwiZXhwIjoxNTc5ODAxNDA2LCJhenAiOiJLMlBKaDczcTQxeUZyeUE2RUpkcjdDeXEzblZxdjF2byIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.RyPO94uArwQ6qi8gZUEil5qSb8w1FS13RO_H_sCE3pDHUl1LtCHQgG8FszhIhWUUMaYUxCsqrRyUrG2aC0ox6Mf0OKafCdSlG01qVDdohWAD2liDGb0RJORLzD0GM7jUFafmnlS151j1d_90Xs0bjReQ0VwmYcgmKd7C4PDA6qDBEs5EV2PIJvw23GqJ74GvJWnUPIHjBuKi2SgvRFQ811QhcTF3ypXZgtsl7w9sz-UEFjNeL3KcfQ4cziZN7ERolxTX0rAya6qVXkVfeJlVmpjm-VehHbVlis_O_Gwx-XgVR5sS5lAGFlmRkzOxVtFUqSZlGUIzCl9Cyy8D0Bp0lw';
   it('Should return 200 for teams', async () => {
      await request(server)
         .get('/api/teams/')
         .set('Authorization', token)
         .expect(200);
   });

   it('Should return 201 success for creating teams', async () => {
      await request(server)
         .post('/api/teams/')
         .set('Authorization', token)
         .send({
            name: 'testing hackathon'
         })
         .expect(201);
   });

   it('Should return 200 success for updating team', async () => {
      await request(server)
         .put('/api/teams/1')
         .set('Authorization', token)
         .send({
            id: 1,
            name: "Fruit Flies n' Stuff - Update"
         })
         .expect(200);
   });

   it('Should return 200 for specific team', async () => {
      await request(server)
         .get('/api/teams/1')
         .set('Authorization', token)
         .expect(200);
   });
   it('Should return a 200 success for deleting a team', async () => {
      await request(server)
         .delete('/api/teams/1')
         .set('Authorization', token)
         .expect(200);
   });
});
