import { ViewportScroller } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller, private modalService: NgbModal) {}

  ngOnInit() {
  }

  onClick(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // Modal
  	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' })
	}

}
