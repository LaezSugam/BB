import { Component, OnInit } from '@angular/core';

import { Score } from "./../score";
import { Router } from "@angular/router";
import { BbService } from "./../bb.service";

@Component({
	selector: 'app-bb-landing',
	templateUrl: './bb-landing.component.html',
	styleUrls: ['./bb-landing.component.css']
})
export class BbLandingComponent implements OnInit {

	scores: Score[];
	showScores: boolean = false;
	searchText: string;

	constructor(private router: Router, private bbService: BbService) { }

	ngOnInit() {
		this.checkUser();
		this.getAllScores();
		this.searchText = "";
	}

	getAllScores(){
		this.bbService.getAllScores()
			.then((data) => {
				this.scores = data;
				this.scores.sort(function(a, b) {
					if(a.score > b.score){
						return -1;
					}
					else if(a.score < b.score){
						return 1;
					}
					else{
						return 0;
					}
				});
				console.log("retrieved data:", data)
				if(data.length > 0){
					this.showScores = true;
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

}
