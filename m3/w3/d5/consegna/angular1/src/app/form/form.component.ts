import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
 
  user: Users = new Users('','');
  users:Users [] = [];
  formAction: string | undefined;

  constructor(private fb: UntypedFormBuilder, private router: Router, private usersSvc:UsersService) { }

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(users => this.users = users)
  }

  saveUser(){
    this.usersSvc.addUsers(this.user).subscribe(res => {
      this.users.push(res)
      this.user = new Users('','')
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




  BackToLogin(): void {
    this.router.navigate(['/']);
  }

  GoToProfile(): void {
    this.router.navigate(['/dashboard']);
  }

}
