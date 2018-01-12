import { Interest } from '../../domain/interest';
import { ChatMessage } from '../../domain/chat-message';
import { CandidatesService } from './../../services/candidates.service';
import { Experience } from './../../domain/experience';
import { Language } from '../../domain/language';
import { Education } from './../../domain/education';
import { Skill } from './../../domain/skill';
import { Candidate } from './../../domain/candidate';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidate-candidate-comparison',
  templateUrl: './candidate-candidate-comparison.component.html',
  styleUrls: ['./candidate-candidate-comparison.component.css']
})
export class CandidateCandidateComparisonComponent implements OnInit {

  private fCandidateId: number;
  private firstCandidate: Candidate;
  private firstCandidateSkills: Array<Skill>;
  private firstCandidateEducation: Array<Education>;
  private firstCandidateInterests: Array<Interest>;
  private firstCandidateExperience: Array<Experience>;
  private firstCandidateLanguages: Array<Language>;
  private firstCandidateLikesNumber: number;
  private firstCandidateCommentsNumber: number;
  private firstCandidateRating: number;

  private sCandidateId: number;
  private secondCandidate: Candidate;
  private secondCandidateSkills: Array<Skill>;
  private secondCandidateEducation: Array<Education>;
  private secondCandidateInterests: Array<Interest>;
  private secondCandidateExperience: Array<Experience>;
  private secondCandidateLanguages: Array<Language>;
  private secondCandidateLikesNumber: number;
  private secondCandidateCommentsNumber: number;
  private secondCandidateRating: number;

  constructor(
    private route: ActivatedRoute, 
    private candidateService: CandidatesService
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        this.fCandidateId = params['fCandidateId'];
        this.sCandidateId = params['sCandidateId'];
      }
    );

    this.initFirstCandidate();
    this.initSecondCandidate();
  }


  private initFirstCandidate(): void {
    this.candidateService.getCandidate(this.fCandidateId)
      .subscribe(data => this.firstCandidate = data);
                
    this.candidateService.getCandidateEducation(this.fCandidateId)
        .subscribe(data => this.firstCandidateEducation = data);
    
    this.candidateService.getCandidateExperience(this.fCandidateId)
        .subscribe(data => this.firstCandidateExperience = data);

    this.candidateService.getCandidateSkills(this.fCandidateId)
      .subscribe(data => this.firstCandidateSkills = data);
    
    this.candidateService.getCandidateInterests(this.fCandidateId)
      .subscribe(data => this.firstCandidateInterests = data);

    this.candidateService.getCandidateLanguages(this.fCandidateId)
      .subscribe(data => this.firstCandidateLanguages = data);

    this.candidateService.getCandidateLikesNumber(this.fCandidateId)
      .subscribe(data => this.firstCandidateLikesNumber = data,
                error => this.firstCandidateLikesNumber = 20);

    this.candidateService.getCandidateRating(this.fCandidateId)
      .subscribe(data => this.firstCandidateRating = data,
                error => this.firstCandidateRating = 4.8);

    this.candidateService.getCandidateCommentsNumber(this.fCandidateId)
    .subscribe(data => this.firstCandidateCommentsNumber = data,
              error => this.firstCandidateCommentsNumber = 45);
  }

  private initSecondCandidate(): void {
    this.candidateService.getCandidate(this.sCandidateId)
      .subscribe(data => this.secondCandidate = data);
                
    this.candidateService.getCandidateEducation(this.sCandidateId)
        .subscribe(data => this.secondCandidateEducation = data);
    
    this.candidateService.getCandidateExperience(this.sCandidateId)
        .subscribe(data => this.secondCandidateExperience = data);

    this.candidateService.getCandidateSkills(this.sCandidateId)
      .subscribe(data => this.secondCandidateSkills = data);
    
    this.candidateService.getCandidateInterests(this.sCandidateId)
      .subscribe(data => this.secondCandidateInterests = data);

    this.candidateService.getCandidateLanguages(this.sCandidateId)
      .subscribe(data => this.secondCandidateLanguages = data);

    this.candidateService.getCandidateLikesNumber(this.sCandidateId)
      .subscribe(data => this.secondCandidateLikesNumber = data,
                error => this.secondCandidateLikesNumber = 20);


    this.candidateService.getCandidateRating(this.sCandidateId)
      .subscribe(data => this.secondCandidateRating = data,
                error => this.secondCandidateRating = 4.8);


    this.candidateService.getCandidateCommentsNumber(this.sCandidateId)
    .subscribe(data => this.secondCandidateCommentsNumber = data,
              error => this.secondCandidateCommentsNumber = 45);
  }

}
