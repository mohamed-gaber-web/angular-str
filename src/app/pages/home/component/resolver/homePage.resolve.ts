import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { getHomePage } from 'src/app/shared/constants/api.constant';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<boolean> {
  page!: string;

  constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.dataService.getList(`${getHomePage}`)
      .pipe(
      catchError((error: any) => {
        return of('no data', error)
      })
    )
  }
}
