import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

export interface SubRouteInfo {
    path: string;
    title: string;
}

export const SUBROUTES: SubRouteInfo[] = [
    { path:'edit-position/', title:'Edit Position'},
    { path: 'positions/', title:'View position'},
    { path: '/chat', title: 'Chat'},
    { path: '/comments', title: 'Comments'},
    { path: 'candidates/', title: 'View candidate'},
    { path: '/edit-question', title: 'Edit Question'}
];

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;


  @ViewChild("navbar") button;

  constructor(location:Location, private renderer : Renderer, private element : ElementRef) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
  }

  ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }

  getTitle(){
      var titlee = window.location.pathname;
      titlee = titlee.substring(1);
      for(var item = 0; item < this.listTitles.length; item++) {
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      for(var item=0; item < SUBROUTES.length; item++) {
        if(titlee.includes(SUBROUTES[item].path)) {
            return SUBROUTES[item].title;
        }
      }
      return 'Dashboard';
  }

  sidebarToggle(){
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];

      if(this.sidebarVisible == false){
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          },500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
  }
}