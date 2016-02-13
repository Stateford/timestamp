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

// routes that end in unix
// ======================
router.route('/:time_unix')

    //get unix time
    .get(function(req, res) {
        Time.findById(req.params.time_unix, function(err, time) {
            if(err) 
                res.send(err);
            
            res.json(time);
        });
    });

// routes that end in natural
router.route('/:time_natural')
    .get(function(req, res) {
        Time.findById(req.params.time_natural, function(err, time) {
            if(err) 
                res.send(err);
            
            res.json(time);
        })
    });

app.use('/api/', router);

// START SERVER
// ===================
app.listen(port);
console.log('server is running on port: ' + port);