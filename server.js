//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//Require the model
var Instructions = require("./api/model/model");

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

// app.put('/api', function(request, response) {

//   newInstructions.findOneAndUpdate(request.body._id, {isCompleted: request.body.isCompleted}, function(error, data) {

//     if (error) console.log('error updating to do list');

//     response.sendStatus(200);

//   });



// });



app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});
