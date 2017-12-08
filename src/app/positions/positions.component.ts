import { PositionsService } from './../services/positions.service';
import { Position } from './../domain/position';
import { Candidate } from './../domain/candidate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Array<Array<Position>>
  
  constructor(private positionsService: PositionsService) { }

  ngOnInit() {
    this.positionsService.getPositions()
      .subscribe(data => this.positions = data);
  }

}
