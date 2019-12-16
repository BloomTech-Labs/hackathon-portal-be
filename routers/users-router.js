const userDb = require('../models/users-model');
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        const users = await userDb.find()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;