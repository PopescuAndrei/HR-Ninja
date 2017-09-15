import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'positions', title: 'Available Positions',  icon:'ti-announcement', class: '' },
    { path: 'candidates', title: 'Candidates',  icon:'ti-user', class: '' },
    { path: 'interview', title: 'Interview',  icon:'ti-notepad', class: '' },
    { path: 'settings', title: 'Profile Settings',  icon:'ti-settings', class: '' }
];

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  
  constructor() { }
  
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }
}
