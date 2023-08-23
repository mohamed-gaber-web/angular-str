import { Component } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { getSocialMedia } from 'src/app/shared/constants/api.constant';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {

  socialMediaList$: Observable<any> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.socialMediaList$ = this.dataService.getList(`${getSocialMedia}`)
    .pipe(map(res => res))
    // this.dataService.getList(`${getSocialMedia}`)
    // .subscribe(res => console.log(res))

  }
}
