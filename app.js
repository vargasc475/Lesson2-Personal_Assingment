const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('./db/connection');


const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;


// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })).use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    next();
}).use('/', require('./routes'));

mongodb.databaseConnecting((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Web Server is listening at pot ' + (process.env.PORT || port) + ` http://${hostname}:${port}/`);
    }
});
