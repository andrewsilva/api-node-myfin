const app = require('../src/app');
const express = require('express');
const http = require('http');

const port = 3000;

app.set('port', port);

const server = http.createServer(app);
const router = express.Router();


server.listen(port);
console.log('rodando na porta', + port);