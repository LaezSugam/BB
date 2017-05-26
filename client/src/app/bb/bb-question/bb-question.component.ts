import { Component, OnInit } from '@angular/core';

import { Question } from "./../question";
import { Router } from "@angular/router";
import { BbService } from "./../bb.service";

@Component({
	selector: 'app-bb-question',
	templateUrl: './bb-question.component.html',
	styleUrls: ['./bb-question.component.css']
})
export class BbQuestionComponent implements OnInit {

	newQuestion: Question;

	constructor(private router: Router, private bbService: BbService) { }

	ngOnInit() {
		this.newQuestion = new Question;
		this.checkUser();
		this.bbService.successfullyAdded = false;
	}

	addQuestion(){
		this.bbService.addQuestion(this.newQuestion)
			.then(() => {
				console.log("Sending post to DB")
				this.newQuestion = new Question;
				this.bbService.successfullyAdded = true;
				this.router.navigate(["/landing"]);

			})
			.catch(err => {
				console.log(err);
			})
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

}
