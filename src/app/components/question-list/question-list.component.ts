import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(private qstnServ:QuestionService) { }

  ngOnInit(): void {
    this.setup();
  }

  async setup() {
    this.questions = await this.qstnServ.getQuestions();
  }

}
