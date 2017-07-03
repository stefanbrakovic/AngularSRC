import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LogInService} from "./Services/log-in.service";

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private _LogInService: LogInService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._LogInService.getUserLoggedIn();
  }
}
