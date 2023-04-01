import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewdetials',
  templateUrl: './viewdetials.component.html',
  styleUrls: ['./viewdetials.component.css']
})
export class ViewdetialsComponent implements OnInit {

  constructor(private http:HttpClient,private  actrouter:ActivatedRoute) { }
  userId: any;
  router:any;
 public getJsonValue: any;


  url = "http://localhost:8081/SCHOOL/registerget?id=";
  

  ngOnInit(): void {

    let userIduiy = this.actrouter.snapshot.paramMap.get('key');

    let userid= userIduiy;

  this.http.get(this.url+userid).subscribe((data:any) => {
        this.getJsonValue = data;
        console.log(data);
      })
  }
}

