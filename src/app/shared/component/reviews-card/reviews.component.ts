import { Component, ViewChild } from '@angular/core';

import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsCardComponent {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;
  currentRate = 2;

  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: false,
    scrollbar: { draggable: true },
    lazy: true,
    speed: 1000,
    loop: true,
    navigation: true,
    grabCursor: true,
    breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
}
  };

}
