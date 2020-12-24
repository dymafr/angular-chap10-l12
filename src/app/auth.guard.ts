import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route, state);
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canDeactivate() {
    return false;
  }
}
