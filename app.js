const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require('./src/controller/user.controller');
const routeSkill = require('./src/controller/skill.controller');

app.use(bodyParser.json());
app.use((error, req, res, _next)=> res.send(error.message));
app.use('/user', route);
app.use('/skill', routeSkill);

module.exports = app;
