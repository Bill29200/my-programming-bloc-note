import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MissionComponent } from './mission/mission.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {path:'employee', component:EmployeeComponent},
    {path:'mission', component:MissionComponent},
    {path:'project', component:ProjectComponent},
    {path:'', component:EmployeeComponent},
    {path:'**', component:EmployeeComponent},

];
