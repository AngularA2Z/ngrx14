import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleRResolver {
  resolve(route: ActivatedRouteSnapshot): string {
    return 'Edit Book ' + route.url[1];
  }
}
