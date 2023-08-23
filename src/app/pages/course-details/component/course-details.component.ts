import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map } from 'rxjs';

declare var $: any;


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  courseDetails$: Observable<any> |undefined;

  constructor(private route: ActivatedRoute, private modalService: NgbModal) {}
  ngOnInit() {
    this.courseDetails$ = this.route.data.pipe(map((res: any) => res.data));
  }

  ngAfterViewInit() {
    $(document).ready(() => {
        $("#demo").simpleAudioPlayer({
            title: "Sample Music",
        });
        console.log('jquery wordked')
    });
  }

    // Modal
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' })
	}


}
