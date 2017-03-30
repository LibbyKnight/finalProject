// Model of DB
// Require Mongoose
var mongoose = require("mongoose");
var db = require("../../server.js");



// Create Schema class
var Schema = mongoose.Schema;



// Create the Students Schema
var Students = new Schema({

  firstName: {

    type: String,
    required: "First name is required."

  },

  lastName: {

    type: String,
    required: "Last name is required.",
    unique: true
    
  },

  githubName: {

    type: String,
    required: "Username is required.",
    unique: true
    
  }

});


// Create the Steps model with the StepsSchema
var Students = mongoose.model("Students", Students);

// Export the model
module.exports = Students;

// var query = {'videoLink': 'images/video1.mp4'};

// var videoLink = 'https://d2y36twrtb17ty.cloudfront.net/sessions/5b3db98d-35b4-442c-bfe4-b57ab97b3794/37feb3ce-9f1b-4d02-97bd-4da35d10987e-4b40a919-4496-4e1d-b64a-9f7e0da10a84.mp4';

// Students.findOneAndUpdate(query, videoLink, {upsert:true}, function(err, doc){
//     if (err) return res.send(500, { error: err });
//     return res.send("succesfully saved");
// });