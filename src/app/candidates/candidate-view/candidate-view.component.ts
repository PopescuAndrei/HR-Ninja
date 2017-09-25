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
  private candidateInterests: Array<any>;
  private candidateLanguages: Array<Language>;
  private candidateExperience: Array<Experience>;
  
  constructor(private route: ActivatedRoute, private candidateService: CandidatesService) { }

  ngOnInit() {
    //here we should have the api call
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    );

    this.candidate = new Candidate(this.candidateId, "Andrei","Popescu","andrei.popescu93@gmail.com",'male', "Dude, you're lucky i'm backing you up", 25, 43, 4.8);
    this.candidateSkills = this.candidateService.getSkillsForCandidate();
    this.candidateEducation = this.candidateService.getEducationForCandidate();
    this.candidateInterests = this.candidateService.getInterestsForCandidate();
    this.candidateLanguages = this.candidateService.getLanguagesForCandidate();
    this.candidateExperience = this.candidateService.getExperienceForCandidate();
  }
}
