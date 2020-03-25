//these endpoints are not completely flushed out and could use another once over.

const hackathonJudgesDb = require('../models/hackathon-judges-model');
const router = require('express').Router();


// this gets all of the submitted judging
router.get('/', async (req, res) => {
    try {
        const judgeRating = await hackathonJudgesDb.find()
        res.status(200).json(judgeRating)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Could not get judge feedback.' })
    }
})

// this will get an array of all the submitted judges feedback

router.get('/:projectSubmissionId', async (req, res) => {
    const { projectSubmissionId }= req.params
    try {
        const info = await hackathonJudgesDb.findBySubmissionId(projectSubmissionId)
        if (info.length === 0) {
          return res.status(404).json({ error: 'That submission does not exist.'})
        }
        return res.status(200).json(info)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'could not find judged feedback'})
    }
})


router.post('/:projectSubmissionId', async (req, res) => {
    const { projectSubmissionId } = req.params;
    const judged = req.body;
    
    if(!judged.score || judged.score === 0) {
        return res.status(400).json({ error: 'please include a score'})
}
    if(!judged.feedback || judged.feedback.length === 0) {
        return res.status(400).json({ error: 'please include some feedback' })
    }

    try {
        const judgedProject = await hackathonJudgesDb.insert({
            ...judged, project_submission_id: projectSubmissionId
        })
        res.status(201).json(judgedProject)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: '' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {  
        const removed = await hackathonJudgesDb.remove(id);
        res.status(200).json({ message: `Removed judged info with id of ${id}`, removed})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Couldn\'t delete that.' });
    } 
})


module.exports = router;
