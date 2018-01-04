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

    createSkill(skill: Skill): Observable<Skill> {
        return this.http
            .post(RouterUtils.createSkillUrl(), JSON.stringify(skill), this.options)
            .map((res:Response) => <Skill> res.json());
    }
    
    createPositionRequirement(positionId: number, skill: Skill): Observable<Skill> {
        return this.http
            .post(RouterUtils.createPositionRequirementUrl(positionId), JSON.stringify(skill), this.options)
            .map((res:Response) => <Skill> res.json());
    }

    deletePositionRequirement(positionId: number, skillName: string): Observable<Skill> {
        return this.http
            .delete(RouterUtils.deletePositionRequirementUrl(positionId, skillName))
            .map((res: Response) => <Skill> res.json());

    }
}