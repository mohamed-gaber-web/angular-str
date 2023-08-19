import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineCoursesRoutingModule } from './online-courses-routing.module';
import { OnlineCoursesComponent } from './component/online-courses.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OnlineCoursesComponent
  ],
  imports: [
    CommonModule,
    OnlineCoursesRoutingModule,
    SharedModule
  ]
})
export class OnlineCoursesModule { }
