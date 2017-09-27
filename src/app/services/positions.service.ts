import { Skill } from '../domain/skill';
import { Candidate } from '../domain/candidate';
import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Position } from '../domain/position';

@Injectable()
export class PositionsService {

    constructor(private http: Http) { }

    getPositions(): Observable<Array<Array<Position>>> {
        return this.http
            .get(RouterUtils.positionsUrl())
            .map((res: Response) => <Array<Array<Position>>> res.json());
    }

    getPosition(positionId: number): Observable<Position> {
        return this.http
            .get(RouterUtils.positionUrl(positionId))
            .map((res: Response) => <Position> res.json());
    }

    getPositionCandidates(positionId: number) : Observable<Array<Candidate>> {
        return this.http
            .get(RouterUtils.positionCandidatesUrl())
            .map((res: Response) => <Array<Candidate>> res.json());
    }

    getPositionRequirements(positionId: number) : Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.positionRequirementsUrl(positionId))
            .map((res: Response) => <Array<Skill>> res.json());
    }
}