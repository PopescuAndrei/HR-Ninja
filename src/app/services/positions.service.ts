import { CandidateScore } from './../domain/candidate-score';
import { Skill } from '../domain/skill';
import { Candidate } from '../domain/candidate';
import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Position } from '../domain/position';

@Injectable()
export class PositionsService {

    private headers: Headers; 
    private options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getPosition(positionId: number): Observable<Position> {
        return this.http
            .get(RouterUtils.positionUrl(positionId))
            .map((res: Response) => <Position> res.json());
    }

    createPosition(position: Position): Observable<Position> {
        return this.http
            .post(RouterUtils.createPositionUrl(), JSON.stringify(position), this.options)
            .map((res: Response) => <Position> res.json());
    }

    deletePosition(positionId: number): Observable<Position> {
        return this.http
            .delete(RouterUtils.deletePositionUrl(positionId))
            .map((res: Response) => <Position> res.json());
    }

    getPositions(): Observable<Array<Array<Position>>> {
        return this.http
            .get(RouterUtils.positionsUrl())
            .map((res: Response) => <Array<Array<Position>>> res.json());
    }

    getPositionsForComparison(): Observable<Array<Position>> {
        return this.http
            .get(RouterUtils.positionComparisonUrl())
            .map((res: Response) => <Array<Position>> res.json());
    }

    getPositionCandidates(positionId: number) : Observable<Array<CandidateScore>> {
        return this.http
            .get(RouterUtils.positionCandidatesUrl(positionId))
            .map((res: Response) => <Array<CandidateScore>> res.json());
    }

    getPositionRequirements(positionId: number) : Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.positionRequirementsUrl(positionId))
            .map((res: Response) => <Array<Skill>> res.json());
    }
}