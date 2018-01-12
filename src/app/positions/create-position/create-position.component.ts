import { Router } from '@angular/router';
import { PositionsService } from './../../services/positions.service';
import { POSITION_NOT_EXISTING, POSITION_NOT_SAVED, POSITION_SAVED, SKILL_ALREADY_EXISTS, SKILL_NOT_ADDED } from './../../util/messages';
import { NotificationService } from './../../services/notification.service';
import { User } from './../../domain/user';
import { SkillService } from './../../services/skill.service';
import { Skill } from './../../domain/skill';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Position } from '../../domain/position';
import { SKILL_ADDED } from '../../util/messages';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnInit {

  private user: User;
  private position: Position;

  private positionForm: FormGroup;

  constructor(
    private router: Router,
    private positionService: PositionsService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.initPositionForm();
  }

  initPositionForm(): void {
    this.positionForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
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
}
