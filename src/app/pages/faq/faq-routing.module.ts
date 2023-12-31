import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './component/faq.component';
import { FaqListResolver } from './resolver/faq-list.resolve';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
    resolve: {
      data: FaqListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
