'use strict';

const body_parser = require('body-parser');
const express = require('express');
const app = express();

app.set('case sensitive routing', true);

app.use(require('method-override')());
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(require(__dirname + '/config/router')(express.Router()));

app.listen(8000);
console.log('App is listening on port 8000.');
