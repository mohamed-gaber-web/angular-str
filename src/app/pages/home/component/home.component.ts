import { Component, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 5,
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
      slidesPerView: 3,
    },
}
  };

  constructor(private viewportScroller: ViewportScroller, private modalService: NgbModal) {}

  ngOnInit() {}

  onClick(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // Modal
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' })
	}



}
