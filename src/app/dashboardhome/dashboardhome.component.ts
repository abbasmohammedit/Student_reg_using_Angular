import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
// import * as jspdf from "jspdf";
import "jspdf-autotable";
import { UserOptions } from "jspdf-autotable";
import { Data } from './data'
import html2canvas from 'html2canvas';

interface jsPDFWithPlugin extends jsPDF {
  autotable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})


export class DashboardhomeComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  // public ListData = [];
  // public columns = ["ID", "Name", "Country"];
  // public rows = [];

  public getJsonValue: any;
  public coursesJsonValue: any;
  public totalJsonValue: any;
  public documentjson:any;
  len: any;
  a: any;
  autoTable:any;
  // name = "Angular " + VERSION.major;
  constructor(private http: HttpClient, private download: ServiceService) {

  }
  count: Array<any> = [];
  ngOnInit(): void {

 

    this.getMethod();
    this.total();
    this.courses();
    // this.makePdf()


    
  }






  public getMethod() {
    this.http.get('http://localhost:8081/SCHOOL/viewall').subscribe((data) => {
      this.getJsonValue = data;
      console.log(data)

      this.count = this.getJsonValue;

      console.log(this.count.length);
      this.len = this.count.length;

      // alert(this.count.length)

    })
  }

  selectedName: string ="pdf";
  students: any[] = [
    {
      name:'csv',
    },
    {
      name:'Xls',
    },
    {
      name:'Xlsx',
    },
    {
      name:'pdf',
    }
  ];

  public total() {
    this.http.get('http://localhost:8081/SCHOOL/totalStudents').subscribe((total) => {
      this.totalJsonValue = total;
      console.log(total);
    })
  }


  public courses() {
    this.http.get('http://localhost:8081/SCHOOL/courseDetail').subscribe((course) => {
      this.coursesJsonValue = course;
      console.log(course);
    })
  }
  // makePdf() {
  //    const DATA = this.el.nativeElement;
  //   html2canvas(DATA).then(canvas => {        
  //     let fileWidth = 200;
  //     let fileHeight = canvas.height * fileWidth / canvas.width;
      
  //     const FILEURI = canvas.toDataURL('image/png')
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 5, 5, fileWidth, fileHeight)      
  //     PDF.save('table.pdf');
  //   });   
  //  }

   documenturl="http://localhost:8081/SCHOOL/convert?file="
   document(){
    let dd=this.selectedName;
    // alert(dd);
    this.http.get(this.documenturl+dd).subscribe((document)=>{
      this.documentjson=document;
      console.log(document);
    })

   }
}
