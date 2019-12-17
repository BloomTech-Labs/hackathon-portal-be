const router = require('express').Router();
const teamDb = require('../models/teams-model');
const userHackathonDb = require('../models/user_hackathons-model')

router.get('/', async(req, res) => {
    try {
        const teams = await teamDb.find()
        res.status(200).json(teams)
    } catch(err) {
        console.log(err)
    }
})

// router.get('/:id', async(req, res) => {
//     const {id} = req.params
//     try {
//         const team = await teamDb.findById(id)
//         // const hackathon_id = team.hackathon_id
//         // team.users = await userHackathonDb.findUsersByTeamId(id, hackathon_id)
//         res.status(200).json(team)
//     } catch(err) {
//         console.log(err)
//     }
// })

module.exports = router;