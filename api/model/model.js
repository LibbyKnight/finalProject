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
    required: "Video is required."
    
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

// console.log(classVideo.Instructions); 

// classVideo.save(function (err, classVideo) {

//   if (err) return console.error(err);


// });