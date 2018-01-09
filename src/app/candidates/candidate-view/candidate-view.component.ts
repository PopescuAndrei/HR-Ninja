import { NO_CANDIDATE_SELECTED, NO_POSITION_SELECTED } from './../../util/messages';
import { PositionsService } from './../../services/positions.service';
import { Interest } from '../../domain/interest';
import { ChatMessage } from '../../domain/chat-message';
import { CandidatesService } from './../../services/candidates.service';
import { Position } from './../../domain/position';
import { Experience } from './../../domain/experience';
import { Language } from '../../domain/language';
import { Education } from './../../domain/education';
import { Skill } from './../../domain/skill';
import { Candidate } from './../../domain/candidate';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html',
  styleUrls: ['./candidate-view.component.css']
})
export class CandidateViewComponent implements OnInit {

  private candidateId: number;
  private candidate: Candidate;
  private candidateSkills: Array<Skill>;
  private candidateEducation: Array<Education>;
  private candidateInterests: Array<Interest>;
  private candidateExperience: Array<Experience>;
  private candidateLanguages: Array<Language>;
  private candidateLikesNumber: number;
  private candidateCommentsNumber: number;
  private candidateRating: number;

  private otherCandidates: Array<Candidate>;
  private positions: Array<Position>;

  private candidateComparisonForm: FormGroup;
  private positionComparisonForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidatesService,
    private positionsService: PositionsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );

    this.initCandidate();

    this.candidateService.getOtherCandidates(this.candidateId)
      .subscribe(
        data => this.otherCandidates = data,
        error => this.otherCandidates = new Array<Candidate>()
      );
    
    this.positionsService.getPositionsForComparison()
      .subscribe(
        data => this.positions = data,
        error => this.positions = new Array<Position>()
      );

    this.initCandidateComparisonForm();
    this.initPositionComparisonForm();
  }

  compareWithCandidate(): void {
    if(this.candidateComparisonForm.value.otherCandidateId) {
      this.router.navigate(['/candidates', this.candidateId, "comparison", this.candidateComparisonForm.value.otherCandidateId]);
    } else {
      this.notificationService.showInfo(NO_CANDIDATE_SELECTED);
    }
  }

  compareWithPosition(): void {
    if(this.positionComparisonForm.value.positionId) {
      this.router.navigate(['/candidates', this.candidateId, "positionComparison", this.positionComparisonForm.value.positionId]);
    } else {
      this.notificationService.showInfo(NO_POSITION_SELECTED);
    }
  }

  private initCandidate(): void {
    this.candidateService.getCandidate(this.candidateId)
    .subscribe(
      data => this.candidate = data
    );
              
  this.candidateService.getCandidateEducation(this.candidateId)
      .subscribe(
        data => this.candidateEducation = data
      );
  
  this.candidateService.getCandidateExperience(this.candidateId)
      .subscribe(
        data => this.candidateExperience = data
      );

  this.candidateService.getCandidateSkills(this.candidateId)
    .subscribe(
      data => this.candidateSkills = data
    );
  
  this.candidateService.getCandidateInterests(this.candidateId)
    .subscribe(
      data => this.candidateInterests = data
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

  private initCandidateComparisonForm(): void {
    this.candidateComparisonForm = new FormGroup({
      otherCandidateId: new FormControl()
    });
  }

  private initPositionComparisonForm(): void {
    this.positionComparisonForm = new FormGroup({
      positionId: new FormControl()
    });
  }
}
