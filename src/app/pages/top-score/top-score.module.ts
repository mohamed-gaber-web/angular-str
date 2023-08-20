import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopScoreRoutingModule } from './top-score-routing.module';
import { TopScoreComponent } from './component/top-score.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TopScoreComponent
  ],
  imports: [
    CommonModule,
    TopScoreRoutingModule,
    SharedModule
  ]
})
export class TopScoreModule { }
