import { Candidate } from './../../domain/candidate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'candidate-list-item',
  templateUrl: './candidate-list-item.component.html',
  styleUrls: ['./candidate-list-item.component.css']
})
export class CandidateListItemComponent implements OnInit {

  @Input()
  candidates: Array<Candidate>;

  constructor() { }

  ngOnInit() {
  }

}
