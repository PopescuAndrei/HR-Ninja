import { JOB_TITLES } from './../../util/constants';
import { LanguageService } from '../../services/language.service';
import { Language } from './../../domain/language';
import { PositionLanguage } from './../../domain/position-language';
import { PositionExperience } from './../../domain/position-experience';
import { SKILL_ADDED, SKILL_ALREADY_EXISTS, SKILL_NOT_ADDED, POSITION_NOT_EXISTING, SKILL_DELETED, EXPERIENCE_ADDED, EXPERIENCE_NOT_ADDED, EXPERIENCE_ALREADY_EXISTS, EXPERIENCE_DELETED, LANGUAGE_DELETED, LANGUAGE_NOT_ADDED, LANGUAGE_ADDED, LANGUAGE_ALREADY_EXISTS } from './../../util/messages';
import { FormGroup, FormControl } from '@angular/forms';
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../domain/skill';
import { Position } from './../../domain/position';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from '../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { LANGUAGE_LEVELS } from '../../util/constants';

@Component({
  selector: 'edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  private positionId: number;
  private position: Position;
  private positionRequirements: Array<Skill>;
  private positionExperiences: Array<PositionExperience>;
  private positionLanguages: Array<PositionLanguage>;

  private existingSkills: Array<Skill>;
  private existingLanguages: Array<Language>
  private languageLevels: Array<string> = LANGUAGE_LEVELS;
  private jobTitles: Array<string> = JOB_TITLES;

  private skillForm: FormGroup;
  private experienceForm: FormGroup;
  private languageForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private skillService: SkillService,
              private languageService: LanguageService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id']
    );

    this.positionsService.getPosition(this.positionId)
      .subscribe(
        data => this.position = data
      );
    
    this.positionsService.getPositionRequirements(this.positionId)
      .subscribe(
        data => this.positionRequirements = data
      );

    this.positionsService.getPositionExperience(this.positionId)
      .subscribe(
        data => this.positionExperiences = data
      );

    this.positionsService.getPositionLanguages(this.positionId)
      .subscribe(
        data => this.positionLanguages = data
      );
    
    this.skillService.getAllSkills()
      .subscribe(
        data => this.existingSkills = data
      );

    this.languageService.getAllLanguages()
      .subscribe(
        data => this.existingLanguages = data
      );

    this.initSkillForm();
    this.initExperienceForm();
    this.initLanguageForm();
  }
  
  private initSkillForm(): void {
    this.skillForm = new FormGroup({
      skillName: new FormControl(),
      level: new FormControl()
    });
  };

  private initExperienceForm(): void {
    this.experienceForm = new FormGroup({
      title: new FormControl(),
      years: new FormControl()
    });
  }

  private initLanguageForm(): void {
    this.languageForm = new FormGroup({
      name: new FormControl(),
      level: new FormControl()
    });
  }

  addSkill(): void {
    if(this.skillForm.value.skillName && this.skillForm.value.level > 0 && this.skillForm.value.level <= 100) {
      let skill = new Skill(this.skillForm.value.skillName, this.skillForm.value.level);

      if(this.skillAlreadyAdded(skill) === false) {
        this.positionsService.createPositionRequirement(this.positionId, skill)
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
    
    this.positionsService.deletePositionRequirement(this.positionId, positionRequirement.name)
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

  addExperience(): void {
    if(this.experienceForm.value.title && this.experienceForm.value.years >= 0 && this.experienceForm.value.years <= 15) {
      let newExperience = new PositionExperience(this.experienceForm.value.title, this.experienceForm.value.years);

      if(this.experienceAlreadyAdded(newExperience) === false) {
        this.positionsService.createPositionExperience(this.positionId, newExperience)
            .subscribe(data => console.log(data));
        this.positionExperiences.push(newExperience);

        this.notificationService.showInfo(EXPERIENCE_ADDED);
        this.initExperienceForm();
      } else {
        this.notificationService.showError(EXPERIENCE_ALREADY_EXISTS);
      }
    } else {
      this.notificationService.showError(EXPERIENCE_NOT_ADDED);
    }
  }
  
  removeExperience(exp: PositionExperience): void {
    const index: number = this.positionExperiences.indexOf(exp);
    
    this.positionsService.deletePositionExperience(this.positionId, exp.title)
      .subscribe(data => {
        if (index >= 0) {
          this.positionExperiences.splice(index, 1);
        }
        this.notificationService.showSuccess(EXPERIENCE_DELETED);
      });
  }

  private experienceAlreadyAdded(exp: PositionExperience): boolean {
    for(let e of this.positionExperiences) {
      if(e.title === exp.title) {
        return true;
      }
    }
    return false;
  }


  addLanguage(): void {
    if(this.languageForm.value.name && this.languageForm.value.level) {
      let newLang = new PositionLanguage(this.languageForm.value.name, this.languageForm.value.level);

      if(this.languageAlreadyAdded(newLang) === false) {
        this.positionsService.createPositionLanguage(this.positionId, newLang)
            .subscribe(data => console.log(data));
        this.positionLanguages.push(newLang);

        this.notificationService.showInfo(LANGUAGE_ADDED);
        this.initLanguageForm();
      } else {
        this.notificationService.showError(LANGUAGE_ALREADY_EXISTS);
      }
    } else {
      this.notificationService.showError(LANGUAGE_NOT_ADDED);
    }
  }
  
  removeLanguage(lang: PositionLanguage): void {
    const index: number = this.positionLanguages.indexOf(lang);
    
    this.positionsService.deletePositionLanguage(this.positionId, lang.name)
      .subscribe(data => {
        if (index >= 0) {
          this.positionLanguages.splice(index, 1);
        }
        this.notificationService.showSuccess(LANGUAGE_DELETED);
      });
  }

  private languageAlreadyAdded(lang: PositionLanguage): boolean {
    for(let l of this.positionLanguages) {
      if(l.name === lang.name) {
        return true;
      }
    }
    return false;
  }
}