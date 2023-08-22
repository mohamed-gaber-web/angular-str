import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Privacy } from '../model/privacy.model';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  privacyItem$: Observable<Privacy> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.privacyItem$ = this.route.data.pipe(map((res: any) => res.data));
  }

}
