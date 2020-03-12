const router = require('express').Router()
const userRouter = require('./users-router')
const hackathonRouter = require('./hackathons-router')
const projectsRouter = require('./project-router')
const projectSubmission = require('./project-submission-router')

router.use('/users', userRouter);
router.use('/hackathons', hackathonRouter);
router.use('/projects', projectsRouter)
router.use('/project-submission', projectSubmission)

module.exports = router;

