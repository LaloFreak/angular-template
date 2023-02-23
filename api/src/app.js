require("dotenv").config();
const morgan = require('morgan');
const express = require('express');
const server = express();

const routes = require('./routes/index.js');

server.use((req, res, next)=>{
    console.log('request from: ', req.headers.origin)
    console.log('method: ', req.method)
    console.log('route: ', req.url)
    const corsList = [
        'http://localhost:4200/',
        'http://localhost:3000',
    ];
    if(corsList.includes(req.headers.origin)){   
        res.header('Access-Control-Allow-Origin', (req.headers.origin));
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
        }
    if(req.headers['user-agent'].includes('insomnia')) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    }
});

server.use(express.json())
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(express.json());
server.use('/', routes);

module.exports = server