import { Skill } from '../domain/skill';
import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillService {

    constructor(private http: Http) { }

	// TODO: add skill routings
    getSkills(): Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.candidateSkillsUrl(1))
            .map((res: Response) => <Array<Skill>> res.json());
    }
}