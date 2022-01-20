import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { User } from '../models/user';
import { UrlService } from './url.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  qstnUrl:string = this.urlServ.url + '/questions';

  constructor(private urlServ:UrlService, private userServ:UserService) { }

  async getQuestions(): Promise<Question[]> {
    let resp = await fetch(this.qstnUrl);
    if (resp.status===200) {
      return await resp.json();
    }
    return null;
  }

  async getQuestionsByTopic(topic:string): Promise<Question[]> {
    let resp = await fetch(this.qstnUrl + '/' + topic);
    if (resp.status===200) {
      return await resp.json();
    }
    return null;
  }

  async markQuestion(qstnId:number): Promise<User> {
    let user = this.userServ.currentUser;
    try {
      let resp = await fetch(this.qstnUrl + '/' + qstnId + '/user/' + user.id, {method:'PUT'});
      if (resp.status===200) {
        let newUser = await resp.json();
        this.userServ.setCurrentUser(newUser);
        return newUser;
      }
      return null;
    } catch {
      return null;
    }
  }
}
