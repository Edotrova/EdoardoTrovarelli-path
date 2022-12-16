import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { GenCrudService } from './gencrud.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GenCrudService <Users> {

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:8080');
  }

  apiUsers:string= 'http://localhost:8080/api/users'

  getUserById(id:number | undefined){
    return this.http.get<Users[]>(this.apiUsers+ '/?id='+ id)
  }


 

}
