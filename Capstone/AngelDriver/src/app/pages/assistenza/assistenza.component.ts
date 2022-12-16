import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assistenza',
  templateUrl: './assistenza.component.html',
  styleUrls: ['./assistenza.component.css']
})
export class AssistenzaComponent implements OnInit {

  

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
