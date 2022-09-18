import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/users';
import { UsersService } from 'src/app/users.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;


  newUser = new Users('', '', new Date,'','','');
  formAction: string | undefined;
  form!: FormGroup


  constructor(private fb: UntypedFormBuilder, private router: Router, private auth:AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
      })

  }

  

  GoToCreateProfile(): void {

    
    this.router.navigate(['/form']);
  }

  submitForm(): void {
    this.auth.login(new Users( '' , '', new Date, this.form.value.email, this.form.value.password, ''))
      .subscribe(authentication => {
        this.auth.saveAccessData(authentication)
        this.router.navigate(['/dashboard'])
      })
    }

}


