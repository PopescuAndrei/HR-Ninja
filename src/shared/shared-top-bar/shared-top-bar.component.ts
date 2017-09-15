import { SharedConfigService } from '../services/shared-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-top-bar',
  templateUrl: './shared-top-bar.component.html',
  styleUrls: ['./shared-top-bar.component.css']
})
export class SharedTopBarComponent implements OnInit {

  constructor(private sharedConfigService: SharedConfigService) { }

  ngOnInit() {
  }

}
