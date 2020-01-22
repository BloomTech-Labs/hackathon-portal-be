const userHackathon = require('../../models/user_hackathons-model')

module.exports = async (req, res, next) => {
    const {user_id, id} = req.params
    const hackathon_id = id
    const registered = await userHackathon.findRegistered(hackathon_id, user_id)
    registered.length ? res.status(401).json({ error: "You've already signed up for this hackathon"}) : next()
}