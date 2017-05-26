var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true, minlength: 15},
  correctAnswer: { type: String, required: true, minlength: 1},
  wrongAnswer1: { type: String, required: true, minlength: 1},
  wrongAnswer2: { type: String, required: true, minlength: 1}
}, {timestamps: true});

var Question = mongoose.model("Question", QuestionSchema);
