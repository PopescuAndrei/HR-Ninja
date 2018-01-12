import { CandidatesService } from './../../services/candidates.service';
import { PositionsService } from './../../services/positions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionExperience } from './../../domain/position-experience';
import { PositionLanguage } from './../../domain/position-language';
import { Skill } from './../../domain/skill';
import { Experience } from './../../domain/experience';
import { Language } from './../../domain/language';
import { Candidate } from './../../domain/candidate';
import { Position } from './../../domain/position';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidate-position-comparison',
  templateUrl: './candidate-position-comparison.component.html',
  styleUrls: ['./candidate-position-comparison.component.css']
})
export class CandidatePositionComparisonComponent implements OnInit {
  
  private candidateId: number;
  private candidate: Candidate;
  private candidateSkills: Array<Skill>;
  private candidateExperience: Array<Experience>;
  private candidateLanguages: Array<Language>;
  private candidateLikesNumber: number;
  private candidateCommentsNumber: number;
  private candidateRating: number;

  private positionId: number;
  private position: Position;
  private positionSkills: Array<Skill>;
  private positionExperience: Array<PositionExperience>;
  private positionLanguages: Array<PositionLanguage>;

  constructor(
    private route: ActivatedRoute, 
    private candidateService: CandidatesService,
    private positionService: PositionsService
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        this.candidateId = params['candidateId'];
        this.positionId = params['positionId'];
      }
    );

    this.initCandidate();
    this.initPosition();
  }


  private initCandidate(): void {
    this.candidateService.getCandidate(this.candidateId)
      .subscribe(
        data => this.candidate = data
      );
    
    this.candidateService.getCandidateExperience(this.candidateId)
        .subscribe(
          data => this.candidateExperience = data
        );

    this.candidateService.getCandidateSkills(this.candidateId)
      .subscribe(
        data => this.candidateSkills = data
      );

    this.candidateService.getCandidateLanguages(this.candidateId)
      .subscribe(
        data => this.candidateLanguages = data
      );

    this.candidateService.getCandidateLikesNumber(this.candidateId)
      .subscribe(
        data => this.candidateLikesNumber = data,
        error => this.candidateLikesNumber = 20
      );

    this.candidateService.getCandidateRating(this.candidateId)
      .subscribe(
        data => this.candidateRating = data,
        error => this.candidateRating = 4.8
      );

    this.candidateService.getCandidateCommentsNumber(this.candidateId)
      .subscribe(
        data => this.candidateCommentsNumber = data,
        error => this.candidateCommentsNumber = 45
      );
  }

  private initPosition(): void {
    this.positionService.getPosition(this.positionId)
      .subscribe(
        data => this.position = data
      );
    
    this.positionService.getPositionRequirements(this.positionId)
      .subscribe(
        data => this.positionSkills = data
      );

    this.positionService.getPositionExperience(this.positionId)
      .subscribe(
        data => this.positionExperience = data
      );

    this.positionService.getPositionLanguages(this.positionId)
      .subscribe(
        data => this.positionLanguages = data
      );
  }
}
