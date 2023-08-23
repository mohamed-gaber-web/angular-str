import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { getCourseDetails } from "src/app/shared/constants/api.constant";
import { DataService } from "src/app/shared/services/data.service";

@Injectable({providedIn: 'root'})
export class CourseDetailsResolver implements Resolve<boolean> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.paramMap.get("id");
    return this.dataService.getList
    (`${getCourseDetails}?id=` + id);
  }
}
