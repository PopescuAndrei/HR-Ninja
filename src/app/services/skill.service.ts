import { Skill } from '../domain/skill';
import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillService {
    
    private headers: Headers; 
    private options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }


    getAllSkills(): Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.allSkillsUrl())
            .map((res: Response) => <Array<Skill>> res.json());
    }
    
	// TODO: add skill routings
    getSkillsForCandidate(candidateId: number): Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.candidateSkillsUrl(candidateId))
            .map((res: Response) => <Array<Skill>> res.json());
    }



    createSkillsForPosition(positionId: number, skills: Array<Skill>): Observable<Array<Skill>> {
        return this.http
            .post(RouterUtils.createPositionRequirementsBulkUrl(positionId), JSON.stringify(skills), this.options)
            .map((res: Response) => <Array<Skill>> res.json());
    }
}