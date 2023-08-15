import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { TopHeaderComponent } from './component/top-header/top-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    TopHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    HeaderComponent,
    TopHeaderComponent,
    FooterComponent
  ]
})
export class ThemeModule { }
