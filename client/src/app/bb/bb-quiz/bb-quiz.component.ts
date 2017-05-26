import { Component, OnInit } from '@angular/core';

import { Question } from "./../question";
import { Score } from "./../score"
import { Router } from "@angular/router";
import { BbService } from "./../bb.service";

@Component({
	selector: 'app-bb-quiz',
	templateUrl: './bb-quiz.component.html',
	styleUrls: ['./bb-quiz.component.css']
})

export class BbQuizComponent implements OnInit {

	questions: any[];
	correctAnswers: string[];
	answer1: string;
	answer2: string;
	answer3: string;

	constructor(private router: Router, private bbService: BbService) { }

	ngOnInit() {
		this.questions = [];
		this.checkUser();
		this.getQuestions()
		this.correctAnswers = [];
		this.answer1 = "";
		this.answer2 = "";
		this.answer3 = "";
		this.bbService.successfullyAdded = false;
	}

	getQuestions(){
		this.bbService.getAllQuestions()
			.then((data) => {
				console.log("retrieved data:", data)
				if(data.length > 0){
					data.sort(function(){ return 0.5 - Math.random() });
					console.log(data.length);
					data.length = 3;
					for(var i = 0; i < data.length; i++){
						console.log("q:", data[i])
						let question = new Question;
						let answers = [];
						this.correctAnswers[i] = data[i].correctAnswer;
						question.question = data[i].question;
						answers.push(data[i].correctAnswer);
						answers.push(data[i].wrongAnswer1);
						answers.push(data[i].wrongAnswer2);
						answers.sort(function(){ return 0.5 - Math.random() })

						question.answer1 = answers[0];
						question.answer2 = answers[1];
						question.answer3 = answers[2];
						this.questions.push(question);
					}
					console.log("retreived questions:", this.questions)

				}
			})
			.catch((err) => console.log("error:", err));
	}

	checkUser(){
		this.bbService.checkUser()
			.then((data) => {
				if(data._id){
					console.log(data);
					this.bbService.currentUser = {_id: data._id, name: data.name};
				}
				else{
					this.router.navigate(["/"]);
				}
			})
	}

	submitAnswers(){
		let correct: number = 0;
		let score = new Score;
		console.log("your answer:", this.answer1, "correct answer:", this.correctAnswers[0])
		if(this.answer1 === this.correctAnswers[0]){correct++}
		if(this.answer2 === this.correctAnswers[1]){correct++}
		if(this.answer3 === this.correctAnswers[2]){correct++}

		this.bbService.lastGameScore = correct;
		this.bbService.lastGameScorePercent = Math.trunc(correct/3*100);
		score.score = correct;
		score.questions = 3;


		this.bbService.addScore(score)
			.then(() => {
				console.log("Sending score to DB")
				this.router.navigate(["/landing"]);

			})
			.catch(err => {
				console.log(err);
			})
	}

}
