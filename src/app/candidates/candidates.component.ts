import { Candidate } from './../domain/candidate';
import { CandidatesService } from './candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  positionCandidates: Array<Candidate[]>

  constructor(private candidateService: CandidatesService) { }

  ngOnInit() {
    this.positionCandidates = this.candidateService.getCandidates();
  }

}
