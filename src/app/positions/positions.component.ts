import { CandidatesService } from './../candidates/candidates.service';
import { Candidate } from './../domain/candidate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  candidates: Array<Candidate[]>
  
  constructor(private candidateService: CandidatesService) { }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }

}
