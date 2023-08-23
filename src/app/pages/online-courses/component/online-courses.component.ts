import { Component } from '@angular/core';
import { Size } from 'src/app/shared/constants/pagination.constant';
import { DataService } from 'src/app/shared/services/data.service';
import { CourseListResult } from '../../home/model/course.model';
import { Subscription } from 'rxjs';
import { getAllCourses } from 'src/app/shared/constants/api.constant';

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.scss']
})
export class OnlineCoursesComponent {

  coursesList: CourseListResult[] = [];
  subs: Subscription[] = [];
  pageNumber: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllCourses();
  }

  // Get All Courses
  getAllCourses() {
    let params = `?Page=${this.pageNumber}&Size=${Size}`;
    this.subs.push(
    this.dataService.getList(`${getAllCourses}` + params)
      .subscribe((res: any) => {
        this.coursesList = res.list;
      })
    );
  }

  onScroll(){
    let params = `?Page=${this.pageNumber}&Size=${Size}`;
    this.subs.push(
      this.dataService.getList(`${getAllCourses}` + params)
      .subscribe(res => {
        // this.coursesList = [...this.coursesList, ...res.list];
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(e => e.unsubscribe())
  }

}
