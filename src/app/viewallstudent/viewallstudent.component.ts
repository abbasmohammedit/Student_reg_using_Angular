import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent {
  public getJsonValue:any;

  
  constructor(private http:HttpClient,private server:LoginuserService,private form:FormBuilder){

  }





  
  count: Array<any> = [];

  ngOnInit(): void{
    this.getMethod();
    // this.getData();

  }
  // http://localhost:8081/SCHOOL/Paging?field=id&page=1&size=2&type=asc
  public getMethod(){
    this.http.get('http://localhost:8081/SCHOOL/viewall').subscribe((data)=>{
      this.getJsonValue=data;
      // alert(data)  
    })
  }
  getdata = new FormGroup({
    pagesize:new FormControl(),
     filter:new FormControl(),
     type:new FormControl(),
     page:new FormControl(),
     date1:new FormControl("dd-MM-yyyy"),
     date2:new FormControl("dd-MM-yyyy"),
  })

  adjust(){
    
  }
 
  getData() {
  let filter="id";
  let type="asc"


  this.http.get(`http://localhost:8081/SCHOOL/dob?start=${this.getdata.value.date1}&end=${this.getdata.value.date2}`)
  .subscribe(dateresponse =>{
    this.getJsonValue=dateresponse;
  })

    this.http.get(`http://localhost:8081/SCHOOL/Paging?field=${filter}&page=${this.getdata.value.page}&size=${this.getdata.value.pagesize}&type=${type}`)
      .subscribe(response => {
        this.getJsonValue = response;

      });
  }

  nextPage() {
    this.getdata.value.page++;
    this.getData();
  }

  previousPage() {
    this.getdata.value.page--;
    if (this.getdata.value.page === -1) {
      this.getdata.value.page = this.getdata.value.page - 1;
    }
    this.getData();
  }

//   handledatechange() {
//     let d1=this.getdata.value.date1;
//     alert("date"+d1+"format"+this.changeformat(d1));
  
//   }
//   changeformat(val:any){
//     const myarray=val.split("-");
//     let year=myarray[0];
//     let month=myarray[1];
//     let day=myarray[2];

//     let formatdate=day+"-"+month+"-"+year;
// return formatdate;
//   }

}
