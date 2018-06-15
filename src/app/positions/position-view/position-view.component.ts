import { CandidateScore } from './../../domain/candidate-score';
import { Candidate } from './../../domain/candidate';
import { PositionsService } from './../../services/positions.service';
import { Skill } from '../../domain/skill';
import { Position } from '../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Experience } from '../../domain/experience';
import { Language } from '../../domain/language';
import { PositionExperience } from '../../domain/position-experience';
import { PositionLanguage } from '../../domain/position-language';

@Component({
  selector: 'position-view',
  templateUrl: './position-view.component.html',
  styleUrls: ['./position-view.component.css']
})
export class PositionViewComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private positionRequirements: Array<Skill>;
  private positionLanguages: Array<PositionLanguage>;
  private positionExperience: Array<PositionExperience>;
  private candidateScores: Array<CandidateScore>;

  constructor(private route: ActivatedRoute, private positionsService: PositionsService) { }
  

  ngOnInit() {
 
    //api call
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id'] 
    );
    
    this.positionsService.getPosition(this.positionId)
      .subscribe(data => this.position = data);

    this.positionsService.getPositionCandidates(this.positionId)
      .subscribe(data => this.candidateScores = data);
    
    this.positionsService.getPositionRequirements(this.positionId)
      .subscribe(data => this.positionRequirements = data);

    this.positionsService.getPositionLanguages(this.positionId)
      .subscribe(data => this.positionLanguages = data);

    this.positionsService.getPositionExperience(this.positionId)
      .subscribe(data => this.positionExperience = data);
  }
}