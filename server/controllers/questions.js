var mongoose = require('mongoose');
var Question = mongoose.model("Question");
var session = require("express-session");

module.exports = {

	add: function(req, res){
		var question = new Question({question: req.body.question, correctAnswer: req.body.correctAnswer, wrongAnswer1: req.body.wrongAnswer1, wrongAnswer2: req.body.wrongAnswer2 });

		console.log("*********************", req.session.userName, "is adding a question.");

        question.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.status(400).json(err);
            }
            else{
                console.log("question created");
                res.json(question);
            }
        })
	},

	show: function(req, res){
		Question.find({}, function(err, questions){
			if(err){
				console.log("something went wrong");
				console.log(err);
				res.json(err);
			}
			else{
				console.log("getting questions");
				res.json(questions);
			}
		})
	}
}
