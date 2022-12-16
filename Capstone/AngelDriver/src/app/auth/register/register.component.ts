import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  registeringUser = new Users( '', '', '', '')

  constructor( private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  signUp(){
    //metti sotto il navigate appena funzionano le API
    // this.router.navigate(['pages/home']) 
    this.registeringUser = new Users( this.form.value.firstname, this.form.value.lastname, this.form.value.email, this.form.value.password)
    this.auth.register(this.registeringUser)
    .subscribe(authentication => {
      this.auth.saveAuthToLocal(authentication)
      
    })
    
  }

}
