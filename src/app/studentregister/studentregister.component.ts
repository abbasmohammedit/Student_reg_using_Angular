import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {

  public postJsonValue: any;

  

  form: FormGroup;


  Hobbies: Array<any> = [
    { name: 'drawing', value: 'drawing'  },
    { name: 'playing', value: 'playing' },
    { name: 'danceing', value: 'danceing' },
    { name: 'others', value: 'others' }
  ];

 



  selectedName: string ="";
  students: any[] = [
    {
      name:'MBA',
    },
    {
      name:'MCA',
    },
    {
      name:'BE',
    },
    {
      name:'BTech',
    }
  ];
  


    



  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        checkArray: this.fb.array([]),
      }
    )


  }
 


 
  ngOnInit(): void {

    }
  onCheck(e: any) {
    let checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    }

  }




  register = new FormGroup({
    firstname: new FormControl("",Validators.required),
    lastname: new FormControl("",Validators.required),
    dateofbirth: new FormControl(),
    email: new FormControl("",Validators.email),
    phone: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    checkhob: new FormControl(),
    pincode: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    boardx:new FormControl(),
    percentage:new FormControl(),
    passing: new FormControl(),
    board12:new FormControl(),
    percentage12: new FormControl(),
    passing12: new FormControl(),
  });

  get fname(){
    return this.register.get("firstname")
  }
  get lname(){
    return this.register.get("lastname");
  }
  get email(){
    return this.register.get("email");
  }
  convertUTCDateToLocalDate(dateofbirth:any) {
    var newDate = new Date(dateofbirth.getTime() - dateofbirth.getTimezoneOffset()*60*1000);
    return newDate;   
}



  registerdata() {
    alert("Registeration Successfull!")
    let check = this.form.value.checkArray;
    let selections=this.selectedName;
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
      courses:selections,
      
      qualification10:["Board"+":"+this.register.value.boardx+","+"Percentage"+":"+this.register.value.percentage+","+"Passing"+":"+this.register.value.passing],
      qualification12:["Board"+":"+this.register.value.board12+","+"Percentage"+":"+this.register.value.percentage12+","+"Passing"+":"+this.register.value.passing12],
    }
  
    this.http.post('http://localhost:8081/SCHOOL/registerpost', register,).subscribe((data) => {
      this.postJsonValue = data;
      console.log(data);
    })

  }
}
