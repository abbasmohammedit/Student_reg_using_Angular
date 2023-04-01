import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';







@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})


export class UpdatestudentComponent implements OnInit {


  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private actrouter: ActivatedRoute) {
    this.form = this.fb.group(
      {
        checkArray: this.fb.array([]),
      }
    )


  }

droupurl="http://localhost:8081/SCHOOL/allId";


  ngOnInit(): void {

    this.http.get(this.droupurl).subscribe((droupdata)=>{
      this.valueDetails=droupdata;
      console.log(droupdata);
    })
  

  }
  valueDetails : any;


  update = new FormGroup({
    updatevalue: new FormControl()
  })



  register = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    dateofbirth: new FormControl(),
    email: new FormControl("", Validators.email),
    phone: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    checkhob: new FormControl(),
    pincode: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    boardx: new FormControl(),
    percentage: new FormControl(),
    passing: new FormControl(),
    board12: new FormControl(),
    percentage12: new FormControl(),
    passing12: new FormControl(),
  });



  updateurldata = "http://localhost:8081/SCHOOL/update?id="
  updateurl = "http://localhost:8081/SCHOOL/registerget?id=";



  updateMethod() {
    let updat = this.update.value.updatevalue;
    this.http.get(this.updateurl + updat).subscribe((updatedata) => {
      this.getJsonValue = updatedata;

      this.firstname = this.getJsonValue.firstname
      this.lastname = this.getJsonValue.lastname
      this.mail = this.getJsonValue.mail;
      this.address = this.getJsonValue.address;
      this.city = this.getJsonValue.city;
      this.phone = this.getJsonValue.phone;
      this.pincode = this.getJsonValue.pincode;
      this.state = this.getJsonValue.state;
      this.country = this.getJsonValue.country;
      this.dateofBirth = this.getJsonValue.dateofBirth;
      this.gender = this.getJsonValue.gender;
      this.id = this.getJsonValue.id;
      this.board10 = this.getJsonValue.board10;
      this.passing10=this.passing10,
      this.percentage10=this.percentage10,
      this.board12 = this.getJsonValue.board12;
      this.passing12=this.passing12,
      this.percentage12=this.percentage12,
      this.selectedName = this.getJsonValue.courses;
      this.hobbies=this.getJsonValue.hobbies;
    })
  }



  firstname = "";
  lastname = "";
  mail = "";
  address = "";
  city = "";
  phone = "";
  pincode = "";
  state = "";
  country = "";
  dateofBirth = "";
  gender = "";
  id = "";
  board10 = ""
  percentage10 = "";
  passing10 = "";
  board12 = ""
  percentage12 = "";
  passing12 = "";
  selectedNamew = "";
  hobbies="";


  updatedata() {

    let updateData=this.update.value.updatevalue;

    const pay =
    {

      firstname: this.firstname,
      lastname: this.lastname,
      dob: this.dateofBirth,
      mail: this.mail,
      gender: this.gender,
      address: this.address,
      city: this.city,
      phone: this.phone,
      hobbies: [
        this.form.value.checkArray.name
        // this.hobbies
        
      ],
      pincode: this.pincode,
      state: this.state,
      country: this.country,
      qualification10: [
       "Board:"+ this.board10,"Percentage:"+this.percentage10,"Passing:"+this.passing10

        // "Board:CBSE,Percentage:85%,Passing:2012"
      ],
      qualification12: [
        "Board:"+this.board12, "Percentage:"+this.percentage12, "Passing:"+this.passing12

        // "Board:Global,Percentage:96%,Passing:2055"
      ],
      courses: this.selectedName
    }


    this.http.put(this.updateurldata+updateData, pay,).subscribe((data) => {

      this.getJsonValue = data;

    })



  }











  public postJsonValue: any;
  public getJsonValue: any = {};


  form: FormGroup;


  Hobbies: Array<any> = [
    { name: 'drawing', value: 'drawing' },
    { name: 'playing', value: 'playing' },
    { name: 'danceing', value: 'danceing' },
    { name: 'others', value: 'others' }

  ];




  selectedName: string = "";
  students: any[] = [
    {
      name: 'MBA',
    },
    {
      name: 'MCA',
    },
    {
      name: 'B.Tech',
    },
    {
      name: 'BE',
    }
  ];











  onCheck(e: any) {
    let checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    }

  }








  get fname() {
    return this.register.get("firstname")
  }
  get lname() {
    return this.register.get("lastname");
  }
  get email() {
    return this.register.get("email");
  }




  registerdata() {
    alert("updated Successfull!")
    let check = this.form.value.checkArray;
    let selections = this.selectedName;
    // console.log(selections);
    let register = {
      firstname: this.register.value.firstname,
      lastname: this.register.value.lastname,
      phone: this.register.value.phone,
      dob: this.register.value.dateofbirth,
      mail: this.register.value.email,
      gender: this.register.value.gender,
      address: this.register.value.address,
      city: this.register.value.city,
      pincode: this.register.value.pincode,
      state: this.register.value.state,
      country: this.register.value.country,
      hobbies: check,
      courses: selections,

      qualification10: ["Board" + ":" + this.register.value.boardx + "," + "Percentage" + ":" + this.register.value.percentage + "," + "Passing" + ":" + this.register.value.passing],
      qualification12: ["Board" + ":" + this.register.value.board12 + "," + "Percentage" + ":" + this.register.value.percentage12 + "," + "Passing" + ":" + this.register.value.passing12],
    }
   
    this.http.put('http://localhost:8081/SCHOOL/update', register,).subscribe((data) => {
      this.postJsonValue = data;
      console.log(data);
    })

  }

  
}
