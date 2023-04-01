import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-viewerror',
  templateUrl: './viewerror.component.html',
  styleUrls: ['./viewerror.component.css']
})
export class ViewerrorComponent implements OnInit {
  constructor(private  actrouter:ActivatedRoute){}
  userIduiy:any;
  ss:any;
  ngOnInit(): void {
    let userIduiy = this.actrouter.snapshot.paramMap.get('key');
  

}

}
