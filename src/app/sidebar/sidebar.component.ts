import { Router } from '@angular/router';
import { User } from './../domain/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: ''},
    { path: 'positions', title: 'Available Positions',  icon:'ti-announcement', class: ''},
    { path: 'candidates', title: 'Candidates',  icon:'ti-user', class: ''},
    { path: 'interview', title: 'Interview',  icon:'ti-notepad', class: ''},
    { path: 'skills', title: 'Skills', icon: 'ti-microphone-alt', class: ''},
    { path: 'settings', title: 'Profile Settings',  icon:'ti-settings', class: ''}
];

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public currentUser: any;
  public isAuthenticated: boolean;
  
  constructor(
      private authService: AuthService,
      private router: Router) {
  }
  
  ngOnInit() {
    this.authService.watchAuthenticatedStatus()
        .subscribe(
            (data:boolean) => {
                this.isAuthenticated = data;
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
        );
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
