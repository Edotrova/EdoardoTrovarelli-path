import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
 
  user: Users = new Users('','',new Date,'','','user');
  users:Users [] = [];
  formAction: string | undefined;

  form!:FormGroup

  
  

  constructor(private fb: UntypedFormBuilder, private router: Router, private usersSvc:UsersService, private auth:AuthService) { }

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(users => this.users = users);
    this.form = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
      date: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  
  deleteUser(user:Users){
    this.usersSvc.deleteUsers(user).subscribe(res => {
      let index = this.users.findIndex(u => u.id === user.id)
      this.users.splice(index,1)
    })
  }


  submit(){
    this.auth.register(new Users(this.form.value.name, this.form.value.surname, this.form.value.date, this.form.value.email, this.form.value.password, this.form.value.role))
    .subscribe(authentication => {
      this.auth.saveAccessData(authentication)
      this.router.navigate(['/dashboard']);
    })
  }

  BackToLogin(): void {
    this.router.navigate(['/']);
  }

  

}
