import { Component, Input, OnInit } from '@angular/core';
import { Education } from './../../domain/education';

@Component({
  selector: 'education-timeline',
  templateUrl: './education-timeline.component.html',
  styleUrls: ['./education-timeline.component.css']
})
export class EducationTimelineComponent implements OnInit {

  @Input()
  candidateEducation: Array<Education>;
  
  constructor() { }

  ngOnInit() {
  }

}
