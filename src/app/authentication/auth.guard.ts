import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../Rest-Api/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor( private apiService:ApiService,
  private _router:Router){}

  canActivate():boolean{
    if(this.apiService.isLoggedIn()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
}