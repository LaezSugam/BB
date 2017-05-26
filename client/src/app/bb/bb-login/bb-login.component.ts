import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { BbService } from "./../bb.service";

@Component({
	selector: 'app-bb-login',
	templateUrl: './bb-login.component.html',
	styleUrls: ['./bb-login.component.css']
})
export class BbLoginComponent implements OnInit {

	loginInfo: object;
	errors: object;

	constructor(private router: Router, private bbService: BbService) { }

	ngOnInit() {
		this.loginInfo = {};
		this.checkUser();
		this.bbService.successfullyAdded = false;
	}

	login(){
		this.bbService.loginUser(this.loginInfo)
			.then((data) => {
				this.loginInfo = {};
				this.errors = {};
				console.log(data);
				this.bbService.currentUser = {_id: data._id, name: data.name};
				this.router.navigate(["/landing"]);
			})
			.catch(err => {
				console.log(err);
				this.errors = err;
			})
	}

	checkUser(){
		this.bbService.checkUser()
			.then((data) => {
				if(data._id){
					console.log(data);
					this.bbService.currentUser = {_id: data._id, name: data.name};
					this.router.navigate(["/landing"])
				}
				else{
					this.router.navigate(["/"]);
				}
			})
	}

}
