import { CANDIDATES, SKILLS } from '../../util/mocks';
import { Candidate } from './../../domain/candidate';
import { PositionsService } from './../../services/positions.service';
import { Skill } from '../../domain/skill';
import { Position } from '../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'position-view',
  templateUrl: './position-view.component.html',
  styleUrls: ['./position-view.component.css']
})
export class PositionViewComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private positionRequirements: Array<Skill>;
  private positionCandidates: Array<Candidate>;

  constructor(private route: ActivatedRoute, private positionsService: PositionsService) { }
  

  ngOnInit() {
 
    //api call
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id'] 
    );
    this.positionCandidates = CANDIDATES[0];
    
    this.positionsService.getPositionRequirements(this.positionId)
    .subscribe(data => this.positionRequirements = data,
              error => this.positionRequirements = SKILLS);
  }
}