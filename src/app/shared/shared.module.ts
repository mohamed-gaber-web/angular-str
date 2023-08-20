import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbAccordionModule, NgbDatepickerModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import {
  IntersectionObserverHooks,
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
} from 'ng-lazyload-image';

import { SwiperModule } from 'swiper/angular';
import { ToastrModule } from 'ngx-toastr';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { CategoryComponent } from './component/category/category.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsCardComponent } from './component/reviews-card/reviews.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ReviewsCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbNavModule,
    SwiperModule,
    NgbAccordionModule,
    HttpClientModule,
    NgbDatepickerModule,
    LazyLoadImageModule,
    ToastrModule.forRoot(),
    NgbPaginationModule,
    NgbRatingModule,
    TranslateModule.forChild({//or forRoot, no idea how to configure this
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }})
  ],
  exports: [
    NgbNavModule,
    LazyLoadImageModule,
    SwiperModule,
    ToastrModule,
    NgbAccordionModule,
    NgbPaginationModule,
    TranslateModule,
    NgbDatepickerModule,
    CategoryComponent,
    RouterModule,
    NgbRatingModule,
    ReviewsCardComponent
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }], // <-- Declare that you want to use ScrollHooks
})
export class SharedModule {}
