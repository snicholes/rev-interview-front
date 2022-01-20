import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-saved-question-list',
  templateUrl: '../question-list/question-list.component.html',
  styleUrls: ['../question-list/question-list.component.css']
})
export class SavedQuestionListComponent implements OnInit {
  questions:Question[];

  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.setup();
  }

  setup() {
    this.questions = this.userServ.currentUser.savedQuestions;
  }
}
