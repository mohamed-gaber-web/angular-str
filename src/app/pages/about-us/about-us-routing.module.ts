import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us.component';
import { AboutResolver } from './resolver/about.resolve';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    resolve: {
      data: AboutResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
