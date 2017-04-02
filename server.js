//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');
var util = require('util');

mongoose.Promise = global.Promise;

//Require the model
var Instructions = require("./api/model/model");
//var Students = require("./api/model/rosterModel");

//Initialize Express
var app = express();

//Port
var PORT = process.env.PORT || 3000;

// set up body-parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Setting the public static directory
app.use(express.static(__dirname + "/app/ucfCompanionApp/"));

//Connection to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/model");

// Save mongoose connection to db
var db = mongoose.connection;

// Logging any moongoose errors to console
db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

// Alerting that we have an open connection
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// Alerting that we have a port connection


 module.exports = db;

 //Passport setup----------------------------------------

app.use(partials());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

var GITHUB_CLIENT_ID = "b9faea0142a154de9650";
var GITHUB_CLIENT_SECRET = "c93b666be99b26bf3b1f70d6820f75f73a5240ab";

passport.serializeUser(function(user, done) {
  done(null, user);

});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"

  },

  function(accessToken, refreshToken, profile, done) {

    process.nextTick(function () {
      return done(null, profile);

    });
  }
));

app.get('/api/user', ensureAuthenticated, function(req, res) {
  res.send(req.user);
});

    app.get('/auth/github',
      passport.authenticate('github', { scope: [ 'user:email' ] }),
      function(req, res){

      });

    app.get('/auth/github/callback', 
      passport.authenticate('github', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');

      });

    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');

    });

    function ensureAuthenticated(req, res, next) {

      if (req.isAuthenticated()) { return next(); }
       res.redirect('/auth/github')

    }
//-------------------------------------------------------

app.get("/api", function(req, res) {
  Instructions.find({}, function(err, data) {

  	if (err) {
  		res.send(err);
  	}

  	else {
  		res.send(data);
  	}
  });

});


app.post('/api', function(req, res) {
  console.log(req.body);
  // create a new todo object
  var newInstructions = new Instructions({
    category: req.body.category,
    videoName: req.body.videoName,
    videoLink: req.body.videoLink,
    transcript: req.body.transcript
  });

newInstructions.save(function (err, newInstructions) {
    if (err) console.log('error saving to db', err);
    res.sendStatus(200);
  });

});


app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
