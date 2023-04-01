import { Component ,OnInit} from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-deleteview',
  templateUrl: './deleteview.component.html',
  styleUrls: ['./deleteview.component.css']
})
export class DeleteviewComponent implements OnInit{

  getJsonValue:any;
constructor(private http:HttpClient,private activeroute:ActivatedRoute,private router:Router){

}
geturl="http://localhost:8081/SCHOOL/registerget?id="
url="http://localhost:8081/SCHOOL/delete?id="




  ngOnInit(): void {

    let userIduiy = this.activeroute.snapshot.paramMap.get('key');

    let userid= userIduiy;

  this.http.get(this.geturl+userid).subscribe((data:any) => {
        this.getJsonValue = data;
        console.log(data);
      })
  }



   public deleteMethod(){
    this.router.navigate([`/dashboard/viewerror`]);

    alert("Are you sure want to delete this detials")
    let dd=this.activeroute.snapshot.paramMap.get('key');
    console.log(dd);
    this.http.get(this.url+ dd).subscribe((data)=>{
      this.getJsonValue=data;
    })
    
  
  
  }

}
