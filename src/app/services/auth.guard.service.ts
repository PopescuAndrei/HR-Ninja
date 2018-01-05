import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		let authStatus = JSON.parse(localStorage.getItem('authenticated'));
		
		if(authStatus === true) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}