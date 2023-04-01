import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})

export class ViewstudentComponent implements OnInit {
  public getJsonValue: any;
  constructor(private http: HttpClient, private router: Router) {
  }


  url = "http://localhost:8081/SCHOOL/registerget?id="
droupurl="http://localhost:8081/SCHOOL/allId";


ngOnInit(): void {

  this.http.get(this.droupurl).subscribe((droupdata)=>{
    this.valueDetails=droupdata;
    console.log(droupdata);
  })

}



  valueDetails : any;
  





  public getMethod() {

    let qq = this.valueDetails;
    this.http.get(this.url + qq).subscribe(
      (data) => this.handleResponse(data),

      (error) => this.handleError(error)
    );
  }


  handleResponse(data: any) {
    // alert("Successful")
    this.router.navigate([`/dashboard/viewdetials`, { key: this.valueDetails }]);
    return data;

  }
  handleError(err: any) {
    // alert("error")
    this.router.navigate([`/dashboard/viewerror`, { key: this.valueDetails }])
    return err;
  }

}

