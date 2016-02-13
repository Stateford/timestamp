// server.js

// BASE SETUP
// ============================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//convert
var convert = require('./app/scripts/convert');

// ROUTES
// ========================
var router = express.Router();

// all requests
router.use(function(req, res, next) {
    console.log('request made');
    next();
});
 
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/:time', function(req, res) {
    var time = req.params.time;
    console.log('time:');
    console.log(time);
    console.log(req.params.time);
    res.json(convert(time));
})

app.use('/', router);

// START SERVER
// ===================
app.listen(port);
console.log('server is running on port: ' + port);