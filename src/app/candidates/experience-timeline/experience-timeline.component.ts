import { Experience } from './../../domain/experience';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.css']
})
export class ExperienceTimelineComponent implements OnInit {
  
  @Input()
  candidateExperience: Array<Experience>;

  constructor() { }

  ngOnInit() {
  }

}
