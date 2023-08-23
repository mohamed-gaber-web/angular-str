import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { HomePageResolver } from './resolver/homePage.resolve';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      data: HomePageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
