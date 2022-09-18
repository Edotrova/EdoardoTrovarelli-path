import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  ApiUsers: string = "http://localhost:3000/users"

  getAllUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.ApiUsers)
  }

  addUsers(user: Users) {
    return this.http.post<Users>(this.ApiUsers,user)
  }

  editUsers(user: Users) {
    return this.http.patch<Users>(this.ApiUsers+'/'+ user.id, user)
  }

  deleteUsers(user: Users) {
    return this.http.delete<Users>(this.ApiUsers+'/'+user.id)
  }
}
