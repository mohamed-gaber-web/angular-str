import { Observable, Subscription, map, tap } from 'rxjs';
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
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { getAllCourses } from 'src/app/shared/constants/api.constant';
import { CourseListResult } from '../model/course.model';
import { Size } from 'src/app/shared/constants/pagination.constant';
SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;
  homeData$: Observable<any> | undefined;
  coursesList: CourseListResult[] = [];
  pageNumber: number = 1;
  subs: Subscription[] = [];

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

  constructor(
    private viewportScroller: ViewportScroller,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private dataService: DataService
    ) {}

  ngOnInit() {
    this.getAllCourses();
    this.homeData$ = this.route.data.pipe(map((res: any) => res.data));
  }

  // Scroll to section
  onClick(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // Get All Courses
  getAllCourses() {
    let params = `?Page=${this.pageNumber}&Size=${Size}`;
    this.dataService.getList(`${getAllCourses}` + params).subscribe((res: any) => {
      this.coursesList = res.list;
    })
  }

  onScroll(){
    let params = `?Page=${this.pageNumber}&Size=${Size}`;
    this.subs.push(
      this.dataService.getList(`${getAllCourses}` + params)
      .subscribe(res => {
        this.coursesList = [...this.coursesList, ...res.list];
      })
    );
  }

  // Modal
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' })
	}

  ngOnDestroy() {
    this.subs.forEach(e => e.unsubscribe())
  }

}
