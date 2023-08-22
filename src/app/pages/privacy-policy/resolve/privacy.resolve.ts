import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { getFaqPage, getPrivacyPage } from 'src/app/shared/constants/api.constant';
import { Size } from 'src/app/shared/constants/pagination.constant';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PrivacyListResolver implements Resolve<boolean> {
  page!: string;

  constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.dataService.getList(`${getPrivacyPage}`)
      .pipe(
      catchError((error: any) => {
        return of('no data', error)
      })
    )
  }
}
