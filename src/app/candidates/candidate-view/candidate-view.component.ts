import { EDUCATION, EXPERIENCES, GENERIC_CANDIDATE, INTERESTS, LANGUAGES, SKILLS } from './../../util/mocks';
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
  // TODO: Replace any with Interest
  private candidateInterests: Array<any>;
  private candidateExperience: Array<Experience>;
  private candidateLanguages: Language[];
  
  constructor(private route: ActivatedRoute, private candidateService: CandidatesService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );

    this.candidateService.getCandidate(this.candidateId)
      .subscribe(data => this.candidate = data,
                error => this.candidate = GENERIC_CANDIDATE);
                
    this.candidateService.getCandidateEducation(this.candidateId)
        .subscribe(data => this.candidateEducation = data,
                  error => this.candidateEducation = EDUCATION);
    
    this.candidateService.getCandidateExperience(this.candidateId)
        .subscribe(data => this.candidateExperience = data,
                  error => this.candidateExperience = EXPERIENCES);

    this.candidateService.getCandidateSkills(this.candidateId)
      .subscribe(data => this.candidateSkills = data,
                error => this.candidateSkills = SKILLS);
    
    this.candidateService.getCandidateInterests(this.candidateId)
      .subscribe(data => this.candidateInterests = data,
                error => this.candidateInterests = INTERESTS);

    this.candidateService.getCandidateLanguages(this.candidateId)
      .subscribe(data => this.candidateLanguages = data,
                error => this.candidateLanguages = LANGUAGES);
  }
}
