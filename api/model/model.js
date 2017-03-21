// Model of DB
// Require Mongoose
var mongoose = require("mongoose");
var db = require("../../server.js");



// Create Schema class
var Schema = mongoose.Schema;



// Create the Instructions Schema
var Instructions = new Schema({

  category: {

    type: String,
    required: "Category is required."

  },

  videoName: {

    type: String,
    required: "Video name is required.",
    unique: true
    
  },

  videoLink: {

    type: String,
    required: "Video is required.",
    unique: true
    
  },

  transcript: {

    type: Object,
    required: "Transcript is required."

  }

});


// Create the Steps model with the StepsSchema
var Instructions = mongoose.model("Instructions", Instructions);

// Export the model
module.exports = Instructions;


// var classVideo = new Instructions({ category: 'AngularJS',  videoName: 'angularpart1', videoLink: 'images/video1.mp4', transcript: {
//         "1123:554" : "TEST CODE1",
//         "1132:555" : "TEST CODE2"}});

// console.log(Instructions); 

// classVideo.save(function (err, classVideo) {

//   if (err) return console.error(err);


// });
// var query = {'videoLink': 'images/video1.mp4'};

// var videoLink = 'https://d2y36twrtb17ty.cloudfront.net/sessions/5b3db98d-35b4-442c-bfe4-b57ab97b3794/37feb3ce-9f1b-4d02-97bd-4da35d10987e-4b40a919-4496-4e1d-b64a-9f7e0da10a84.mp4';

// Instructions.findOneAndUpdate(query, videoLink, {upsert:true}, function(err, doc){
//     if (err) return res.send(500, { error: err });
//     return res.send("succesfully saved");
// });