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
        const hackathon_teams = await userHackathon.findTeamsByHackathonId(id)
        hackathon.teams = hackathon_teams;

       async function map(arr, cb) {
            let new_arr = [];
            for (let i=0; i<arr.length; i++) {
                new_arr[i] = arr[i]
                new_arr[i].users = await cb(hackathon.id)
            }
            return res.status(200).json(hackathon)
        }
        map(hackathon_teams, userHackathon.findUserByHackathon)
    } catch(err) {
        console.log(err)
    }
})


router.get('/:id/users', async(req, res) => {
    const {id} = req.params;
    try {
        const hackathon = await userHackathon.findByHackathon(id)
        res.status(200).json(hackathon)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;