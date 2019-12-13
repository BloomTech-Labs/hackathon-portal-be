const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const userRouter = require('./routers/users-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', userRouter);

server.get('/', (req, res) => {
   res.send('Server is running!');
});

module.exports = server;
