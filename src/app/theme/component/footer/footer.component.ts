import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { getContactUsInfo } from 'src/app/shared/constants/api.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  contactUsInfo$: Observable<any> | undefined

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.contactUsInfo$ = this.dataService.getList(`${getContactUsInfo}`).pipe(map(res => res))
  }

}
