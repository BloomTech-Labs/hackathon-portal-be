const router = require('express').Router();
const projectDb = require('../models/project-submission');
const userHackathonDb = require('../models/user_hackathons-model');
const hackathonDb = require('../models/hackathons-model');


// Get list of all projects
router.get('/', async (req, res) => {
    try {
        const projects = await projectDb.find()
        res.status(200).json(projects)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// Get project by id
router.get('/:projectId', async (req, res) => {
    const { projectId } = req.params;
    console.log(req.params)
    try {
        const project = await projectDb.findById(projectId)
        if (!project) {
            res.status(404).json({ error: "Project doesn't exist" })
        } else {
            try {
                // let participants = await userHackathonDb.findProjectParticipants(projectId)
                //     project.participants = participants
                res.status(200).json(project)
              
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// Update current project information, not implemented on the front end
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        const updated = await projectDb.update(id, changes)
        res.status(200).json(updated)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// Create project to be utilized
router.post('/', async (req, res) => {
    const project_data = req.body;

    try {
        const created = await projectDb.add(project_data)
        res.status(201).json({ message: 'Project submission was successful.', data: created })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// delete a current project, not implemented on the front end
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await projectDb.remove(id)
        if (deleted !== 0) {
            res.status(200).json({ message: `Deleted project-submission with id ${id}` })
        } else {
            res.status(404).json({ error: `Could not find a project-submission with the id of ${id} to delete` })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;