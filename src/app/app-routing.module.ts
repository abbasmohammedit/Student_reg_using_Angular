import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { DeleteviewComponent } from './deleteview/deleteview.component';
import { LoginComponent } from './login/login.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { ViewdetialsComponent } from './viewdetials/viewdetials.component';
import { ViewerrorComponent } from './viewerror/viewerror.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'vdashboard', component: DashboardhomeComponent },
      { path: 'studentregister', component: StudentregisterComponent },
      { path: 'deletestudent', component: DeletestudentComponent },
      {
        path: 'viewdetials', component: ViewdetialsComponent
      },
      {path: 'deleteview',component:DeleteviewComponent},
      { path: 'updatestudent', component: UpdatestudentComponent },
      { path: 'viewallstudent', component: ViewallstudentComponent },
      { path: 'view', component: ViewstudentComponent },
      {path:'viewerror',component:ViewerrorComponent}


    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
