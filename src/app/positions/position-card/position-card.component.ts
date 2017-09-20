import { Position } from './../../domain/position';
import { PositionsComponent } from '../positions.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.css']
})
export class PositionCardComponent implements OnInit {

  @Input() position: Position;
  
  constructor(private positionsComponent: PositionsComponent) { }

  ngOnInit() {
  }

}
