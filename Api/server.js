const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('../routers/api-router')
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());



var jwtCheck = jwt({
   secret: jwks.expressJwtSecret({
       cache: true,
       rateLimit: true,
       jwksRequestsPerMinute: 5,
       jwksUri: 'https://dev-kwqdx1i8.us.auth0.com/.well-known/jwks.json'
 }),
 audience: 'http://localhost:3001',
 issuer: 'https://dev-kwqdx1i8.us.auth0.com/',
 algorithms: ['RS256']
});

server.use(jwtCheck);

server.get('/authorized', function (req, res) {
 res.send('Secured Resource');
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
