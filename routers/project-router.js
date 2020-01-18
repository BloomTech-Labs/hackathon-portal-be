const router = require('express').Router();
const projectDb = require('../models/project-model');
const userHackathonDb = require('../models/user_hackathons-model');
const hackathonDb = require('../models/hackathons-model');

// Get list of all teams
router.get('/', async (req, res) => {
    try {
        const teams = await projectDb.find()
        res.status(200).json(teams)
    } catch (err) {
        console.log(err)
    }
});

// Get team by id, adding specific hackathon with ?hackathon query
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { hackathon } = req.query
    try {
        const project = await projectDb.findById(id)
        console.log(project)
        if (!project) {
            res.status(404).json({ error: "Project doesn't exist" })
        } else {
            try {
                let participants = await userHackathonDb.findProjectParticipants(id)
                console.log(participants)
                    project.participants = participants

                res.status(200).json(project)
              
            } catch (err) {
                res.status(500).json(err)
            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// Update current team information
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        const updated = await projectDb.update(id, changes)
        res.status(200).json(updated)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Create team to be utilized
router.post('/', async (req, res) => {
    const team_data = req.body;

    try {
        const created = await projectDb.add(team_data)
        res.status(201).json({ message: 'Team was successfully created', data: created })
    } catch (err) {
        res.status(500).json(err)
    }
});

// delete a current team
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await projectDb.remove(id)
        if (deleted !== 0) {
            res.status(200).json({ message: `Deleted team with id ${id}` })
        } else {
            res.status(404).json({ error: `Could not find a team with the id of ${id} to delete` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;