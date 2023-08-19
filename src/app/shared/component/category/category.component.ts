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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: false,
    scrollbar: { draggable: true },
    lazy: true,
    speed: 1000,
    loop: true,
    navigation: true,
    breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
}
  };

}
