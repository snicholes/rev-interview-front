import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SavedQuestionListComponent } from './components/saved-question-list/saved-question-list.component';

const routes: Routes = [
  {
    path:'home',
    component:QuestionListComponent
  },
  {
    path:'questions',
    component:QuestionListComponent
  },
  {
    path:'saved',
    component:SavedQuestionListComponent
  },
  {
    path:'',
    component:QuestionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
