import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private url = 'https://reqres.in/api/users';
     
  constructor(private httpClient: HttpClient) { }
    
  getUsers(page: number){
    return this.httpClient.get(this.url + '?page=' + page)
  }
}
