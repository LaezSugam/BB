var mongoose = require('mongoose');

var ScoreSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2},
  score: {type: Number, required: true},
  questions: {type: Number, required: true},
  percentage: {type: Number}
}, {timestamps: true});

var Score = mongoose.model("Score", ScoreSchema);
