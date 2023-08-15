import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import {
  IntersectionObserverHooks,
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
} from 'ng-lazyload-image';

import { SwiperModule } from 'swiper/angular';
import { ToastrModule } from 'ngx-toastr';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbNavModule,
    SwiperModule,
    NgbAccordionModule,
    HttpClientModule,
    LazyLoadImageModule,
    ToastrModule.forRoot(),
    NgbPaginationModule,
  ],
  exports: [
    NgbNavModule,
    LazyLoadImageModule,
    SwiperModule,
    ToastrModule,
    NgbAccordionModule,
    NgbPaginationModule,

  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }], // <-- Declare that you want to use ScrollHooks
})
export class SharedModule {}
