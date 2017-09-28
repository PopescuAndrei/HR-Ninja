import { SKILLS } from './../../util/mocks';
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../domain/skill';
import { Position } from './../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from '../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { POSITIONS } from '../../util/mocks';

@Component({
  selector: 'edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private skillList: Array<Skill>;
  
  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private skillService: SkillService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id']
    );

    this.positionsService.getPosition(this.positionId)
      .subscribe(data => this.position = data,
                error => this.position = POSITIONS[1][1]);
    
    this.skillService.getSkills()
        .subscribe(data => this.skillList = data,
                  error => this.skillList = SKILLS);
  }

}
