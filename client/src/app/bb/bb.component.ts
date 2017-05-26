import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { BbService } from "./bb.service";

@Component({
	selector: 'app-bb',
	templateUrl: './bb.component.html',
	styleUrls: ['./bb.component.css']
})
export class BbComponent implements OnInit {

	constructor(private router: Router, private bbService: BbService) { }

	ngOnInit() {
	}

	logout(){

		this.bbService.logout()
		.then(() => {
			this.bbService.currentUser = {};
			this.router.navigate(["/"]);
		});
	}

}
