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

router.get('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const teams = await teamDb.findById(id)
        teams.users = await userHackathonDb.findUsersByTeamId(id)
        res.status(200).json(teams)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;