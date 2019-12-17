const router = require('express').Router()
const userRouter = require('./users-router')
const hackathonRouter = require('./hackathons-router')
const teamRouter = require('./teams-router');

router.use('/users', userRouter);
router.use('/hackathons', hackathonRouter);
router.use('/teams', teamRouter)


module.exports = router;

