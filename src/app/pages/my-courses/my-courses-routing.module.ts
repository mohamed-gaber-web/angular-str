import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCoursesComponent } from './component/my-courses.component';

const routes: Routes = [
  {
    path: '',
    component: MyCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCoursesRoutingModule { }
