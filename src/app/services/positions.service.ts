import { PositionLanguage } from './../domain/position-language';
import { PositionExperience } from './../domain/position-experience';
import { CandidateScore } from './../domain/candidate-score';
import { Skill } from '../domain/skill';
import { Candidate } from '../domain/candidate';
import { Observable } from 'rxjs/Rx';
import { RestMappings } from './../util/router.utils';
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
            .get(RestMappings.positionUrl(positionId))
            .map((res: Response) => <Position> res.json());
    }

    createPosition(position: Position): Observable<Position> {
        return this.http
            .post(RestMappings.createPositionUrl(), JSON.stringify(position), this.options)
            .map((res: Response) => <Position> res.json());
    }

    deletePosition(positionId: number): Observable<Position> {
        return this.http
            .delete(RestMappings.deletePositionUrl(positionId))
            .map((res: Response) => <Position> res.json());
    }

    getPositions(): Observable<Array<Array<Position>>> {
        return this.http
            .get(RestMappings.positionsUrl())
            .map((res: Response) => <Array<Array<Position>>> res.json());
    }

    getPositionsForComparison(): Observable<Array<Position>> {
        return this.http
            .get(RestMappings.positionComparisonUrl())
            .map((res: Response) => <Array<Position>> res.json());
    }

    getPositionCandidates(positionId: number) : Observable<Array<CandidateScore>> {
        return this.http
            .get(RestMappings.positionCandidatesUrl(positionId))
            .map((res: Response) => <Array<CandidateScore>> res.json());
    }

    getPositionRequirements(positionId: number) : Observable<Array<Skill>> {
        return this.http
            .get(RestMappings.positionRequirementsUrl(positionId))
            .map((res: Response) => <Array<Skill>> res.json());
    }

    getPositionExperience(positionId: number) : Observable<Array<PositionExperience>> {
        return this.http
            .get(RestMappings.positionExperiencesUrl(positionId))
            .map((res: Response) => <Array<PositionExperience>> res.json());
    }

    getPositionLanguages(positionId: number) : Observable<Array<PositionLanguage>> {
        return this.http
            .get(RestMappings.positionLanguagesUrl(positionId))
            .map((res: Response) => <Array<PositionLanguage>> res.json());
    }

    createPositionRequirement(positionId: number, skill: Skill): Observable<Skill> {
        return this.http
            .post(RestMappings.createPositionRequirementUrl(positionId), JSON.stringify(skill), this.options)
            .map((res:Response) => <Skill> res.json());
    }

    deletePositionRequirement(positionId: number, skillName: string): Observable<Skill> {
        return this.http
            .delete(RestMappings.deletePositionRequirementUrl(positionId, skillName))
            .map((res: Response) => <Skill> res.json());

    }

    createPositionExperience(positionId: number, exp: PositionExperience): Observable<PositionExperience> {
        return this.http
            .post(RestMappings.createPositionExperienceUrl(positionId), JSON.stringify(exp), this.options)
            .map((res:Response) => <PositionExperience> res.json());
    }

    deletePositionExperience(positionId: number, title: string): Observable<PositionExperience> {
        return this.http
            .delete(RestMappings.deletePositionExperienceUrl(positionId, title))
            .map((res: Response) => <PositionExperience> res.json());

    }

    createPositionLanguage(positionId: number, lang: PositionLanguage): Observable<PositionLanguage> {
        return this.http
            .post(RestMappings.createPositionLanguageUrl(positionId), JSON.stringify(lang), this.options)
            .map((res:Response) => <PositionLanguage> res.json());
    }

    deletePositionLanguage(positionId: number, lang: string): Observable<PositionLanguage> {
        return this.http
            .delete(RestMappings.deletePositionLanguageUrl(positionId, lang))
            .map((res: Response) => <PositionLanguage> res.json());

    }
}