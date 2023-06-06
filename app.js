const express = require('express');
const app = express();


const hostname = '127.0.0.1';
const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port) + ` http://${hostname}:${port}/`);
