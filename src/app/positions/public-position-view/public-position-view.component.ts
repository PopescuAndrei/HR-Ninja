
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../domain/skill';
import { Position } from './../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from '../../services/positions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-position-view',
  templateUrl: './public-position-view.component.html',
  styleUrls: ['./public-position-view.component.css']
})
export class PublicPositionViewComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private positionRequirements: Array<Skill>;

  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private skillService: SkillService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id']
    );

    this.positionsService.getPosition(this.positionId)
      .subscribe(data => this.position = data);
    
    this.positionsService.getPositionRequirements(this.positionId)
      .subscribe(data => this.positionRequirements = data);
  }            

}
