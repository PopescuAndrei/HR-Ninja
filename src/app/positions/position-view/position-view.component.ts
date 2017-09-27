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
  private positionCandidates: Array<Candidate>;

  constructor(private route: ActivatedRoute, private positionsService: PositionsService) { }
  

  ngOnInit() {
 
    //api call
    this.route.params.forEach(
      (params: Params) => this.positionId = params['id'] 
    );

    this.position = new Position(this.positionId, "General Position", `Our job descriptions highlight the primary responsibilities, requirements, qualifications and challenges of a given job. In short, a job description will tell you what your employer will expect from you, as well as what you can expect from your employer.
    Whether you’re looking for your first job or researching what you’ll need to do to land your dream job in the future, our job descriptions will help point you in the right direction.`, 
    SKILLS, new Date("12.12.2017"));

    this.positionCandidates = CANDIDATES[0];
  }
}
