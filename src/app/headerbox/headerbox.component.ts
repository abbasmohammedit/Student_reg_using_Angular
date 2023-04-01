import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerbox',
  templateUrl: './headerbox.component.html',
  styleUrls: ['./headerbox.component.css']
})
export class HeaderboxComponent {
  constructor(private router: Router){

  }


  dashhome(): void {
    this.router.navigate([`/dashboard/vdashboard`]);
  }
  returnlogin():void{
    this.router.navigate([``]);
  }
}
