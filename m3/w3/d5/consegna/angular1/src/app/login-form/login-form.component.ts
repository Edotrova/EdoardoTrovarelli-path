import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm():void{
        
        this.router.navigate(['/dashboard']);
  }

  user: Users = new Users('','');
  users:Users [] = [];
  formAction: string | undefined;

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  };

  GoToCreateProfile(): void {

    
    this.router.navigate(['/form']);
  }



}
