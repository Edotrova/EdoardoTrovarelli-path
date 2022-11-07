import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: Users = new Users('','',new Date,'','','user');
  users:Users [] = [];
  formAction: string | undefined;

  constructor(private usersSvc:UsersService) { }

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(users => this.users = users)
  }

  saveUser(){
    this.usersSvc.addUsers(this.user).subscribe(res => {
      this.users.push(res)
      this.user = new Users('','',new Date,'','','user')
    })
  }


  editUser(){
    this.usersSvc.editUsers(this.user).subscribe(res => {
      let index = this.users.findIndex(p => p.id === this.user.id)
      this.users.splice(index,1, this.user)
      this.formAction = 'create'
    })
  }

  deleteUser(user:Users){
    this.usersSvc.deleteUsers(user).subscribe(res => {
      let index = this.users.findIndex(u => u.id === user.id)
      this.users.splice(index,1)
    })
  }



}
