import { SKILL_ADDED, SKILL_ALREADY_EXISTS, SKILL_NOT_ADDED, SKILLS_SAVED, POSITION_NOT_EXISTING, SKILL_DELETED } from './../../util/messages';
import { FormGroup, FormControl } from '@angular/forms';
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../domain/skill';
import { Position } from './../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from '../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private positionRequirements: Array<Skill>;
  private existingSkills: Array<Skill>;

  private skillForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private skillService: SkillService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id']
    );

    this.positionsService.getPosition(this.positionId)
      .subscribe(data => this.position = data);
    
    this.positionsService.getPositionRequirements(this.positionId)
      .subscribe(data => this.positionRequirements = data);

    this.skillService.getAllSkills()
      .subscribe(data => this.existingSkills = data);

    this.initSkillForm();
  }
  
  initSkillForm(): void {
    this.skillForm = new FormGroup({
      skillName: new FormControl(),
      level: new FormControl()
    });
  };

  addSkill(): void {
    if(this.skillForm.value.skillName && this.skillForm.value.level > 0 && this.skillForm.value.level <= 100) {
      let skill = new Skill(this.skillForm.value.skillName, this.skillForm.value.level);

      if(this.skillAlreadyAdded(skill) === false) {
        this.skillService.createPositionRequirement(this.positionId, skill)
            .subscribe(data => console.log(data));
        this.positionRequirements.push(skill);

        this.notificationService.showInfo(SKILL_ADDED);
        this.initSkillForm();
      } else {
        this.notificationService.showError(SKILL_ALREADY_EXISTS);
      }
    } else {
      this.notificationService.showError(SKILL_NOT_ADDED);
    }
  }

  removeSkill(positionRequirement: Skill): void {
    const index: number = this.positionRequirements.indexOf(positionRequirement);
    
    this.skillService.deletePositionRequirement(this.positionId, positionRequirement.name)
      .subscribe(data => {
        if (index >= 0) {
          this.positionRequirements.splice(index, 1);
        }
        this.notificationService.showSuccess(SKILL_DELETED);
      });
  }

  private skillAlreadyAdded(skill: Skill): boolean {
    for(let s of this.positionRequirements) {
      if(skill.name === s.name) {
        return true;
      }
    }
    return false;
  }
}