import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineCoursesComponent } from './component/online-courses.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineCoursesRoutingModule { }
