import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { HeaderboxComponent } from './headerbox/headerbox.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { ViewdetialsComponent } from './viewdetials/viewdetials.component';
import { ViewerrorComponent } from './viewerror/viewerror.component';
import { DeleteviewComponent } from './deleteview/deleteview.component';
import { ServiceService } from './service/service.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StudentregisterComponent,
    ViewstudentComponent,
    UpdatestudentComponent,
    DeletestudentComponent,
    ViewallstudentComponent,
    DashboardhomeComponent,
    HeaderboxComponent,
    UpdateformComponent,
    ViewdetialsComponent,
    ViewerrorComponent,
    DeleteviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxPaginationModule
    
    // DialogModule,
    // ButtonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
