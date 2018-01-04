import { SKILL_ADDED, SKILL_ALREADY_EXISTS, SKILL_NOT_ADDED, SERVER_ERROR } from './../util/messages';
import { SkillService } from './../services/skill.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Skill } from './../domain/skill';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private skill: Skill;
  private existingSkills: Array<Skill>;

  private skillForm: FormGroup;

  constructor(
    private skillService: SkillService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.skillService.getAllSkills()
    .subscribe(data => this.existingSkills = data);

    this.initSkillForm();
  }

  initSkillForm(): void {
    this.skillForm = new FormGroup({
      skillName: new FormControl(),
    });
  };

  addSkill(): void {
    if(this.skillForm.value.skillName) {
      let skill = new Skill(this.skillForm.value.skillName, 1);

      if(this.skillAlreadyAdded(skill) === false) {
        this.skillService.createSkill(skill)
          .subscribe(data => {
            this.existingSkills.push(data);
            this.notificationService.showInfo(SKILL_ADDED);
            this.initSkillForm();
          }, error => {
            this.notificationService.showError(SERVER_ERROR)
          });
      } else {
        this.notificationService.showError(SKILL_ALREADY_EXISTS);
      }
    } else {
      this.notificationService.showError(SKILL_NOT_ADDED);
    }
  }

  private skillAlreadyAdded(skill: Skill): boolean {
    for(let s of this.existingSkills) {
      if(skill.name === s.name) {
        return true;
      }
    }
    return false;
  }
}
