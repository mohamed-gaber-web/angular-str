import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faqListResult } from '../model/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  faqsList!: faqListResult;
  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((res: any) => {
        console.log(res.data.list)
        this.faqsList = res.data;
      })
    );
  }

  strip(s:any):string{
   return s.replaceAll(/<\/?[^>]+(>|$)/gi, "");
  }

  ngOnDestroy() {
    this.subs.forEach(e => e.unsubscribe())
  }

}
