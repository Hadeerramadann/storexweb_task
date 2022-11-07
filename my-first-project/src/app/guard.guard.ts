import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import {Router } from '@angular/router';
import { ApiService } from '../app/api.service';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private dataService:ApiService,private router:Router ){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    // return true;
    const routeurl: string = state.url;
    return this.isLogin(routeurl);
  }
 
    isLogin(routeurl: string) {
    if (this.dataService.isLoggedIn()) {
    return true;
    }
    this.dataService.redirectUrl = routeurl;
    this.router.navigate(['login'], {queryParams: { returnUrl: routeurl }}) ;
  }
    
}
