import {Routes, RouterModule} from "@angular/router";
import { BbComponent } from "./bb/bb.component";
import { BbLoginComponent } from "./bb/bb-login/bb-login.component";
import { BbLandingComponent } from "./bb/bb-landing/bb-landing.component";
import { BbQuestionComponent } from "./bb/bb-question/bb-question.component";
import { BbQuizComponent } from "./bb/bb-quiz/bb-quiz.component";

const APP_ROUTES: Routes = [

	{ path: "", redirectTo: "/login", pathMatch: "full"},
	{ path: "login", component: BbLoginComponent},
	{ path: "landing", component: BbLandingComponent},
	{ path: "add_question", component: BbQuestionComponent},
	{ path: "quiz", component: BbQuizComponent}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
