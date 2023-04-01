import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateformComponent } from '../updateform/updateform.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

 download(){
 return this.http.get('https://jsonplaceholder.typicode.com/todos/1',
 {observe:'response',responseType:'blob'})
 }
}
