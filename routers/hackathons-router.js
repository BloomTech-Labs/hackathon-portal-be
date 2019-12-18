const hackathonDb = require('../models/hackathons-model.js');
const userHackathon = require('../models/user_hackathons-model.js');
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const hackathons = await hackathonDb.find()
        res.status(200).json(hackathons)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const hackathon = await hackathonDb.findById(id) 
        if (hackathon) { // if hackathon exists
            const hackathon_teams = await userHackathon.findHackathonTeams(id)
            const teams = [];
            const map = new Map();
            for (const item of hackathon_teams) {
                if(!map.has(item.team_id)){
                    map.set(item.team_id, true);    // set any value to Map
                    teams.push({
                        team_id: item.team_id,
                        team_name: item.team_name,
                    });
                }
             } 

            async function mapTeams(arr, cb) {
                for (let x=0; x<arr.length; x++) {
                    arr[x].devs = await cb(arr[x].team_id, id)
                }
                    return arr
                } 

            

            hackathon.teams = await mapTeams(teams, userHackathon.findTeamDevsByHackathon)
           
            

            hackathon.admins = await userHackathon.findHackathonAdmins(id)
                
            res.status(200).json(hackathon)
    } else {
        res.status(404).json({ error: 'That hackathon does not exist' })
    }
    } catch(err) {
        res.status(500).json({ error: 'Could not get hackathon' })
        console.log(err)
    }
})


// router.get('/:id/users', async(req, res) => {
//     const {id} = req.params;
//     try {
//         const hackathon = await userHackathon.findByHackathon(id)
//         res.status(200).json(hackathon)
//     } catch(err) {
//         console.log(err)
//     }
// })

module.exports = router;