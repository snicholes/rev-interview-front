import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string = this.urlServ.url + '/users';
  currentUser:User;

  constructor(private urlServ: UrlService) { }

  async getUsers():Promise<User[]> {
    let resp = await fetch(this.userUrl);
    if (resp.status===200) {
      return await resp.json();
    } else {
      return null;
    }
  }

  setCurrentUser(user:User) {
    this.currentUser = user;
  }
}
