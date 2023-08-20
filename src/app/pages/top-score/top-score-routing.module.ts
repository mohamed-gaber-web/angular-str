import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopScoreComponent } from './component/top-score.component';

const routes: Routes = [
  {
    path: '',
    component: TopScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopScoreRoutingModule { }
