import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Position } from '../domain/position';
import { POSITIONS } from '../domain/mocks';

@Injectable()
export class PositionsService {

    constructor(private http: Http) { }

    getPositions(): Array<Position[]> {
        return POSITIONS;
    }
}