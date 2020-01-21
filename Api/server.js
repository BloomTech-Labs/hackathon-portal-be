const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('../routers/api-router')
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

var jwtCheck = jwt({
   secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://hackathonportal.auth0.com/.well-known/jwks.json'
   }),
   audience: 'https://hackathon-portal.herokuapp.com/',
   issuer: 'https://hackathonportal.auth0.com/',
   algorithms: ['RS256']
});

server.use('/api', jwtCheck, apiRouter)

server.get('/', (req, res) => {
   res.send('Server is running!');
});

server.get("/api/external", jwtCheck, (req, res) => {
   res.send({
      msg: "Your Access Token was successfully validated!"
   });
});

module.exports = server;
