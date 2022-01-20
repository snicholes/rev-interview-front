import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];
  currentUserId:number;

  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.setup();
  }

  setUser() {
    let currentUser = this.users.find(user=>user.id==this.currentUserId);
    this.userServ.setCurrentUser(currentUser);
  }

  async setup() {
    this.users = await this.userServ.getUsers();
  }

}
