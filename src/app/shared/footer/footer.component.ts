import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer-cmp',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  test : Date;

  constructor() { }

  ngOnInit() {
    this.test = new Date();
  }

}
