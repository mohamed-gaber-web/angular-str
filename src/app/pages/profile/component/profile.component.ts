import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    constructor(private modalService: NgbModal) {}

  // Modal
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' })
	}
}
