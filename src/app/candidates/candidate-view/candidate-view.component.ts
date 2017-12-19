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
  
  constructor(private route: ActivatedRoute, private candidateService: CandidatesService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );

    this.candidateService.getCandidate(this.candidateId)
      .subscribe(data => this.candidate = data);
                
    this.candidateService.getCandidateEducation(this.candidateId)
        .subscribe(data => this.candidateEducation = data);
    
    this.candidateService.getCandidateExperience(this.candidateId)
        .subscribe(data => this.candidateExperience = data);

    this.candidateService.getCandidateSkills(this.candidateId)
      .subscribe(data => this.candidateSkills = data);
    
    this.candidateService.getCandidateInterests(this.candidateId)
      .subscribe(data => this.candidateInterests = data);

    this.candidateService.getCandidateLanguages(this.candidateId)
      .subscribe(data => this.candidateLanguages = data);

    this.candidateService.getCandidateLikesNumber(this.candidateId)
      .subscribe(data => this.candidateLikesNumber = data,
                error => this.candidateLikesNumber = 20);


    this.candidateService.getCandidateRating(this.candidateId)
      .subscribe(data => this.candidateRating = data,
                error => this.candidateRating = 4.8);


    this.candidateService.getCandidateCommentsNumber(this.candidateId)
    .subscribe(data => this.candidateCommentsNumber = data,
              error => this.candidateCommentsNumber = 45);
  }
}
