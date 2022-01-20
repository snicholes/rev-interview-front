import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question;
  saveOrUnsaveTxt:string = 'Save';
  msgTxt:string = '';

  constructor(private qstnServ:QuestionService) { }

  ngOnInit(): void {
  }

  async saveOrUnsave() {
    let result = await this.qstnServ.markQuestion(this.question.id);
    if (result) {
      if (this.saveOrUnsaveTxt==='Save') this.saveOrUnsaveTxt = 'Unsave';
      else this.saveOrUnsaveTxt = 'Save';
    } else {
      this.msgTxt = 'You need to choose a user before you can save questions.';
    }
  }

}
