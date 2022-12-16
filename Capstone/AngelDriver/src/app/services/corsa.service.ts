import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corsa } from '../models/corsa';
import { GenCrudService } from './gencrud.service';

@Injectable({
  providedIn: 'root'
})
export class CorsaService extends GenCrudService <Corsa> {

  constructor(private http:HttpClient) { 
    super(http, 'http://localhost:3000/corsa');
  }

  apiCorsa:string= 'http://localhost:3000/corsa'

  getUserById(id:number | undefined){
    return this.http.get<Corsa[]>(this.apiCorsa+ '/?id='+ id)
  }

}
