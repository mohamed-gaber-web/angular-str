import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './component/privacy-policy.component';
import { PrivacyListResolver } from './resolve/privacy.resolve';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
    resolve: {
      data: PrivacyListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPolicyRoutingModule { }
