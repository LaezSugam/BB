var mongoose = require('mongoose');
var Score = mongoose.model("Score");
var session = require("express-session");

module.exports = {

	add: function(req, res){
		var score = new Score({name: req.session.userName, score: req.body.score, questions: req.body.questions, percentage: Math.trunc(req.body.score/req.body.questions*100)});



		console.log("Recording score for:", req.session.userName, "*******************");

        score.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.status(400).json(err);
            }
            else{
                console.log("score created");
                res.json(score);
            }
        })
	},

	show: function(req, res){
		Score.find({}, function(err, scores){
			if(err){
				console.log("something went wrong");
				console.log(err);
				res.json(err);
			}
			else{
				console.log("getting scores");
				res.json(scores);
			}
		})
	}
}
