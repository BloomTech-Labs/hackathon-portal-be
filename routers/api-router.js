const router = require('express').Router()
const userRouter = require('./users-router')
const hackathonRouter = require('./hackathons-router')
const projectsRouter = require('./project-router')

router.use('/users', userRouter);
router.use('/hackathons', hackathonRouter);
router.use('/projects', projectsRouter)

module.exports = router;

