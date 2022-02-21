const express = require('express');
const path = require('path');
const jsonServer = require('json-server')

const middlewares = jsonServer.defaults()
let db = require("./generateDB");
const router = jsonServer.router(db())

const hostname = '127.0.0.1';
const port = 8080;

const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './src')));

app.use('/api', router)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});