// const express = require('express');
// const path = require('path');
// const jsonServer = require('json-server')

// const middlewares = jsonServer.defaults()
// let db = require("./generateDB");
// const router = jsonServer.router(db())

// const hostname = '127.0.0.1';
// const port = process.env.PORT || 80;

// const app = express();
// const bodyParser = require("body-parser");


// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './src')));

// app.use('/api', router)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server listening on the port::${port}`);
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require("./generateDB");

const router = jsonServer.router(db())
// const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 80;

server.use(middlewares);
server.use(router);

server.listen(port);