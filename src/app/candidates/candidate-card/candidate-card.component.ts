import { CandidatesComponent } from '../candidates.component';
import { Component, Input, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit {

  @Input() candidate;

  constructor(private candidatesComponent: CandidatesComponent) { }

  ngOnInit() {
  }
}
