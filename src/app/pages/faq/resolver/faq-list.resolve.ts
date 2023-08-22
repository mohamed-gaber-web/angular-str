import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { getFaqPage } from 'src/app/shared/constants/api.constant';
import { Size } from 'src/app/shared/constants/pagination.constant';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FaqListResolver implements Resolve<boolean> {
  page!: string;

  constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.page = route.queryParamMap.get('page') || '1';
    const params = `?page=${this.page}&size=${Size}`;
    return this.dataService.getList(`${getFaqPage}` + params)
      .pipe(
      catchError((error: any) => {
        return of('no data', error)
      })
    )
  }
}
