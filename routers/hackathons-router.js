const hackathonDb = require('../models/hackathons-model.js');
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const hackathons = await hackathonDb.find()
        res.status(200).json(hackathons)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;