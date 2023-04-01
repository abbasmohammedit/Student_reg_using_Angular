import { Component, OnInit } from '@angular/core';
import { UpdatestudentComponent } from '../updatestudent/updatestudent.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})



export class UpdateformComponent implements OnInit {



  userId: any
  http: any;
  getJsonValue: any;

  update = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl()
  })

  constructor(private router: ActivatedRoute, private updatye: UpdatestudentComponent, public service: ServiceService) {


  }

  url = "http://localhost:8081/SCHOOL/registerget?id="

  ngOnInit(): void {
    this.userId = this.router.snapshot.paramMap.get('key');
    // console.log(this.userId+"ijbihb");

    this.http.get(this.url + this.userId).subscribe((data: any) => {
      this.getJsonValue = data;
      console.log(data)

    })

    // updateform(){
    //   alert("khvhj")
    // }

this.updateMethod()
  }

  updateMethod() {
    let updat = this.userId;
    this.http.get(this.url + updat).subscribe((updatedata: any) => {
      this.getJsonValue = updatedata;
      // this.router.navigate([`/dashboard/updatestudent/updateform`,{key: this.update.value.updatevalue}]);
      console.log(this.getJsonValue + "5231");
    })
  }
}