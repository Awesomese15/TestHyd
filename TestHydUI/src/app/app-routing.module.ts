import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStuduentListComponent } from './view-studuent-list/view-studuent-list.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
 
  {path: 'view', component: ViewStuduentListComponent},
  {path: 'add', component: AddStudentComponent},
 {path: 'update/:roll', component: StudentComponent} ,
 {path: '', redirectTo: '/view', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
