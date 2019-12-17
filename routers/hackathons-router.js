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
        if (hackathon) {
        res.status(200).json(hackathon)
    } else {
        res.status(404).json({ error: 'That hackathon does not exist' })
    }
    } catch(err) {
        res.status(500).json({ error: 'Could not get hackathon' })
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