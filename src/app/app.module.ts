import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SavedQuestionListComponent } from './components/saved-question-list/saved-question-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UrlService } from './services/url.service';
import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuestionComponent,
    QuestionListComponent,
    SavedQuestionListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UrlService,
    UserService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
