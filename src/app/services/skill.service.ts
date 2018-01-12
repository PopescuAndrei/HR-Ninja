import { Skill } from '../domain/skill';
import { Observable } from 'rxjs/Rx';
import { RestMappings } from './../util/router.utils';
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
            .get(RestMappings.allSkillsUrl())
            .map((res: Response) => <Array<Skill>> res.json());
    }
    
	getSkillsForCandidate(candidateId: number): Observable<Array<Skill>> {
        return this.http
            .get(RestMappings.candidateSkillsUrl(candidateId))
            .map((res: Response) => <Array<Skill>> res.json());
    }

    createSkill(skill: Skill): Observable<Skill> {
        return this.http
            .post(RestMappings.createSkillUrl(), JSON.stringify(skill), this.options)
            .map((res:Response) => <Skill> res.json());
    }
}