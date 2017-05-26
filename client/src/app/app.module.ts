import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BbComponent } from './bb/bb.component';
import { BbLoginComponent } from './bb/bb-login/bb-login.component';

import { BbService } from "./bb/bb.service";
import { routing } from "./app.routes";
import { BbLandingComponent } from './bb/bb-landing/bb-landing.component';
import { BbQuizComponent } from './bb/bb-quiz/bb-quiz.component';
import { BbQuestionComponent } from './bb/bb-question/bb-question.component';
import { FilterPipe } from './bb/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BbComponent,
    BbLoginComponent,
    BbLandingComponent,
    BbQuizComponent,
    BbQuestionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routing
  ],
  providers: [BbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
