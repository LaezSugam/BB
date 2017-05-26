import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http";
import { User } from "./user";
import { Question } from "./question";
import { Score } from "./score";
import "rxjs"

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class BbService {

	currentUser: object = {};
	lastGameScore: number;
	lastGameScorePercent: number;
	successfullyAdded: boolean = false;

	constructor(private http: Http) { }

	registerUser(user: User){
		return this.http.post("/register", user, OPTIONS).toPromise()
	}

	loginUser(loginInfo: object){
		return this.http.post("/login", loginInfo, OPTIONS).map(data => data.json()).toPromise()
	}

	getAllQuestions(){
		return this.http.get("/questions")
			.map(data => data.json()).toPromise();
	}

	addQuestion(question: Question){
		return this.http.post("/question", question, OPTIONS).toPromise()
	}

	getAllScores(){
		return this.http.get("/scores")
			.map(data => data.json()).toPromise();
	}

	addScore(score: Score){
		return this.http.post("/score", score, OPTIONS).toPromise()
	}

	logout(){
		return this.http.get("/logout").toPromise()
	}

	checkUser(){
		return this.http.get("/checkUser").map(data => data.json()).toPromise()
	}

}
