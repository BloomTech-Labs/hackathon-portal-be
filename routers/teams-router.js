const router = require('express').Router();
const teamDb = require('../models/teams-model');
const userHackathonDb = require('../models/user_hackathons-model');
const hackathonDb = require('../models/hackathons-model');

router.get('/', async(req, res) => {
    try {
        const teams = await teamDb.find()
        res.status(200).json(teams)
    } catch(err) {
        console.log(err)
    }
})


router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const {hackathon} = req.query
    try {
        const team = await teamDb.findById(id)
        if (!team) {
            res.status(404).json({ error: "Team doesn't exist" })
        } else if (hackathon) {   
            try {
                const hack_exists = await hackathonDb.findById(hackathon)
                if (hack_exists === -1) {
                    res.status(404).json({ error: "that hackathon doesn't exist"})
                } else {
                    let t_devs = await userHackathonDb.findTeamUsers(id, hackathon)
                    const result = [];
                    const map = new Map();
                    for (const item of t_devs) {
                        if(!map.has(item.user_id)){
                            map.set(item.user_id, true);    // set any value to Map
                            result.push({
                                user_id: item.user_id,
                                username: item.username,
                                user_hackathon_role: item.user_hackathon_role,
                                developer_role: item.developer_role,
                            });
                        }
                    } team.participants = result
                    res.status(200).json(team)
                }
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else { // NO QUERY STRING FOR HACKATHON
            let t_devs = await userHackathonDb.findTeamUsersNoH(id)
            const result = [];
                const map = new Map();
                for (const item of t_devs) {
                    if(!map.has(item.user_id)){
                        map.set(item.user_id, true);    // set any value to Map
                        result.push({
                            user_id: item.user_id,
                            username: item.username,
                        });
                    }
                }
            team.participants = result
            res.status(200).json(team)
        }
    } catch(err) {
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router;