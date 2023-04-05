import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthguardGuard} from './authguard.guard'

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full',
    },
  {path:'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthguardGuard] }, //canActivate: [AuthguardGuard]
  {path:  'projects', component: ProjectsComponent},
  {path: 'tasks', component: TasksComponent},
  {path:  'employee', component: EmployeeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
