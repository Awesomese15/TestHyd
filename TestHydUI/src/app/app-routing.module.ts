import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStuduentListComponent } from './view-studuent-list/view-studuent-list.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path: 'view', component: ViewStuduentListComponent},
 {path: 'update/:roll', component: StudentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
