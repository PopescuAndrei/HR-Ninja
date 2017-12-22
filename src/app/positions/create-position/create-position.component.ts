import { Router } from '@angular/router';
import { PositionsService } from './../../services/positions.service';
import { SKILL_NOT_ADDED, POSITION_NOT_EXISTING, SKILLS_SAVED, POSITION_SAVED, POSITION_NOT_SAVED } from './../../util/messages';
import { NotificationService } from './../../services/notification.service';
import { User } from './../../domain/user';
import { SkillService } from './../../services/skill.service';
import { Skill } from './../../domain/skill';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Position } from '../../domain/position';
import { SKILL_ADDED } from '../../util/messages';

@Component({
  selector: 'create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnInit {

  private user: User;
  private position: Position;
  private positionRequirements: Array<Skill>;

  private existingSkills: Array<Skill>;

  private positionForm: FormGroup;
  private skillForm: FormGroup;

  constructor(
    private router: Router,
    private skillService: SkillService,
    private positionService: PositionsService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.skillService.getAllSkills()
      .subscribe(data => this.existingSkills = data);

    this.positionRequirements = new Array<Skill>();

    this.initPositionForm();
    this.initSkillForm();
  }

  initPositionForm(): void {
    this.positionForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  };

  initSkillForm(): void {
    this.skillForm = new FormGroup({
      skillName: new FormControl(),
      level: new FormControl()
    });
  };

  addPosition(): void {
    if(this.positionForm.value.name && this.positionForm.value.description) {
      let newPosition = new Position(null, this.positionForm.value.name, 
                                          this.positionForm.value.description,
                                          new Date(), null, new Date());
      
      this.positionService.createPosition(newPosition)
        .subscribe(position => this.position = position);

      this.notificationService.showSuccess(POSITION_SAVED);
    } else {
      this.notificationService.showError(POSITION_NOT_SAVED);
    }
  };

  addSkill(): void {
    if(this.skillForm.value.skillName && this.skillForm.value.level) {
      let skill = new Skill(this.skillForm.value.skillName, this.skillForm.value.level);

      this.positionRequirements.push(skill);
      this.notificationService.showInfo(SKILL_ADDED);
      this.initSkillForm();
    } else {
      this.notificationService.showError(SKILL_NOT_ADDED);
    }
  }

  saveSkills(): void {
    if (this.position.id != 0 || this.position.id != null) {
      this.skillService.createSkillsForPosition(this.position.id, this.positionRequirements);
      
      this.initSkillForm();
      this.initPositionForm();
      this.notificationService.showSuccess(SKILLS_SAVED);
      
      this.router.navigate(["/positions"]);
    } else {
      this.notificationService.showError(POSITION_NOT_EXISTING);
    }
  }
}
