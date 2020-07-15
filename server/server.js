require('./config/config');
const express = require('express');
const path = require('path');
const routes = require('../routes');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT;
 
//* Load static files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

//* Template engine and views
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use('/', routes()); // Load the routes

app.listen(port, () => {
    console.log('Application is working, port', port);
});