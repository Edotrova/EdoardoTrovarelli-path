import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../models/drivers';
import { GenCrudService } from './gencrud.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService extends GenCrudService <Drivers> {

  constructor(private http:HttpClient) { 
    super(http, 'http://localhost:3000/drivers');
  }


  apiDrivers:string= 'http://localhost:3000/drivers'

  getDriverById(id:number | undefined){
    return this.http.get<Drivers[]>(this.apiDrivers+ '/?id='+ id)
  }
}
