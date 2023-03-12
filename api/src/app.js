require("dotenv").config();
const morgan = require('morgan');
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express');
const logger = require('feathers-logger')
const server = express(feathers());
const router = require('./modules/users/users.routes')

server.use((req, res, next)=>{
    console.log('request from: ', req.headers.origin)
    console.log('method: ', req.method)
    console.log('route: ', req.url)
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.configure(express.rest());
server.configure(logger(morgan('tiny')));

router(server)

module.exports = server