import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public getJsonValue: any;
    constructor(private router: Router,
    private http: HttpClient) {

  }

 dd="enter valid user name ";
 ff='enter valid password';
  url = "http://localhost:8081/SCHOOL/validating?username="
  login = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.maxLength(5)]),
    password: new FormControl('',[Validators.required]),
  });

  GetData() {
    // location.reload();

    console.log(this.login.value.user);
    console.log(this.login.value.password);
    let user = this.login.value.user;
    let password = this.login.value.password;
    this.http.get(this.url + user + '&password=' + password).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    alert("Successfully login");
    this.router.navigate([`/dashboard/vdashboard`]);
    return data;
  }

  handleError(err: any) {
    return err;
  }

  get user(){
  return this.login.get('user')
  }

  get password(){
    return this.login.get('password')
    }
}