import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './component/course-details.component';
import { CourseDetailsResolver } from './resolver/course-details.resolve';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsComponent,
    resolve: {
      data: CourseDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule { }
