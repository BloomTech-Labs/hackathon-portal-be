const hackathonDb = require('../models/hackathons-model.js');
const userHackathon = require('../models/user_hackathons-model.js');
const userDb = require('../models/users-model');
const router = require('express').Router();

// get list of all hackathons
router.get('/', async (req, res) => {
   try {
      const hackathons = await hackathonDb.find();
      res.status(200).json(hackathons);
   } catch (err) {
      res.status(500).json({ error: 'Could not get hackathons' });
   }
});

// get list of specific hackathon - members and admins
router.get('/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const hackathon = await hackathonDb.findById(id);
      if (hackathon !== -1) {
         // if hackathon exists
         const hackathon_teams = await userHackathon.findHackathonTeams(id);
         const teams = [];
         const map = new Map();
         for (const item of hackathon_teams) {
            // remove duplicate instances
            if (!map.has(item.team_id)) {
               map.set(item.team_id, true); // set any value to Map
               teams.push({
                  team_id: item.team_id,
                  team_name: item.team_name
               });
            }
         }
         // map through each team and find the users on that team for that hackathon
         async function mapTeams(arr, cb) {
            for (let x = 0; x < arr.length; x++) {
               arr[x].devs = await cb(arr[x].team_id, id);
            }
            return arr;
         }
         hackathon.teams = await mapTeams(
            teams,
            userHackathon.findTeamDevsByHackathon
         ); // call the map function
         hackathon.admins = await userHackathon.findHackathonAdmins(id);
         hackathon.individual_devs = await userHackathon.findIndividualDevelopers(
            id
         );

         res.status(200).json(hackathon);
      } else {
         res.status(404).json({ error: 'That hackathon does not exist' });
      }
   } catch (err) {
      res.status(500).json({ error: 'Could not get hackathon' });
   }
});

// organizer creates a hackathon
router.post('/u/:id', async (req, res) => {
   const hackathon = req.body;
   const { id } = req.params;
   hackathon.organizer_id = id;
   try {
      const added = await hackathonDb.insert(hackathon);
      const new_hackathon = await hackathonDb.findById(added.id);
      const hackathon_id = new_hackathon.id;
      const new_instance = {
         user_id: id,
         hackathon_id: hackathon_id,
         user_hackathon_role: 'organizer'
      };
      userHackathon.insertHackathonInstance(new_instance);
      res.status(201).json(added);
   } catch (err) {
      res.status(500).json({ err: 'Could not add hackathon' });
   }
});

// update hackathon information
router.put('/:id/u/:org_id', async (req, res) => {
   const { id } = req.params;
   const { org_id } = req.params;
   const changes = req.body;
   try {
      const hack_exists = await hackathonDb.findById(id);
      if (hack_exists === -1) {
         res.status(404).json({
            error: `Could not find hackathon ${id} to update`
         });
      } else if (hack_exists.organizer_id.toString() !== org_id) {
         res.status(401).json({ error: 'not your hackathon' });
      } else {
         const updated = await hackathonDb.updateHackathon(id, changes);
         res.status(200).json(updated);
      }
   } catch (err) {
      res.status(500).json({ error: 'Could not update hackathon' });
   }
});

// organizer can delete a current hackathon
router.delete('/:id/u/:org_id', async (req, res) => {
   const { id } = req.params;
   const { org_id } = req.params;
   try {
      const hack_exists = await hackathonDb.findById(id);
      if (hack_exists === -1) {
         res.status(404).json({
            error: `Could not find hackathon ${id} to delete`
         });
      } else if (hack_exists.organizer_id.toString() !== org_id) {
         res.status(401).json({ error: 'not your hackathon' });
      } else {
         hackathonDb.remove(id);
         res.status(200).json({ message: `deleted hackathon with id ${id}` });
      }
   } catch (err) {
      res.status(500).json({ error: 'Could not delete hackathon' });
   }
});

// join a hackathon as a user
router.post('/:id/join/:user_id', async (req, res) => {
   const { id } = req.params;
   const { user_id } = req.params;
   const body = req.body;
   try {
      const instance = {
         ...body,
         user_id: user_id,
         hackathon_id: id
      };
      await userHackathon.insertHackathonInstance(instance);
      const hackathon = await hackathonDb.findById(id);
      const user = await userDb.findById(user_id);
      if (!body.developer_role) {
         res.status(201).json({
            message: `Congrats, you registered  ${user.username} for ${hackathon.name} as a ${body.user_hackathon_role}`
         });
      } else {
         res.status(201).json({
            message: `Congrats, you registered for ${hackathon.name} as a ${body.user_hackathon_role} doing ${body.developer_role}`
         });
      }
   } catch (err) {
      res.status(500).json({ error: 'Could not register for hackathon' });
   }
});

module.exports = router;
