import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {

  constructor() { }

  form!:FormGroup


  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      alterego: new FormControl(null,[
        Validators.required
      ]),
      power: new FormControl(null,[
        Validators.required
      ]),
      enemy:new FormControl(null,[
        Validators.required, Validators.required,
        Validators.maxLength(10)
      ]),
      planet:new FormControl(null,[
        Validators.required, Validators.required,
        Validators.minLength(5)
      ])

      })
  }
  submit(){
    
    console.log(this.form.value)
  }

}
