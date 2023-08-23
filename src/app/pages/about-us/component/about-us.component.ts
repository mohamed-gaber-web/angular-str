import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  aboutUsInfo$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.aboutUsInfo$ = this.route.data.pipe(map((res: any) => res.data))
  }
}
