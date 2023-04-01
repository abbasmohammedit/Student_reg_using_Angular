import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {
  public getJsonValue:any;


  constructor (private http:HttpClient,private route:Router){

  }


  droupurl="http://localhost:8081/SCHOOL/allId";


  url="http://localhost:8081/SCHOOL/delete?id="

  geturl="http://localhost:8081/SCHOOL/registerget?id="

  ngOnInit(): void {

    this.http.get(this.droupurl).subscribe((droupdata)=>{
      this.valueDetails=droupdata;
      console.log(droupdata);
    })
  
  }

  
  valueDetails:any;



  
  
  



  public getDeletevalue(){
   
    // let getvalue=this.valueDetails;

    this.http.get(this.geturl+this.valueDetails).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );

  }

  handleResponse(data: any) {
    // alert("Successful")
    this.route.navigate([`/dashboard/deleteview`, { key: this.valueDetails }]);
    return data;

  }
  handleError(err: any) {
    // alert("error")
    this.route.navigate([`/dashboard/viewerror`, { key: this.valueDetails }])
    return err;
  }
  
  



}
