import { CANDIDATES } from '../util/mocks';
import { CandidatesService } from './../services/candidates.service';
import { Candidate } from './../domain/candidate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Array<Array<Candidate>>;

  constructor(private candidateService: CandidatesService) { }

  ngOnInit() {
    this.candidateService.getCandidates()
      .subscribe(data => this.candidates = data,
                error => this.candidates = CANDIDATES);
  }

}
