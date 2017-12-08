import { Interest } from './../domain/interest';
import { Observable } from 'rxjs/Rx';
import { RouterUtils } from '../util/router.utils';
import { CANDIDATES, COMMENTS, EDUCATION, INTERESTS, LANGUAGES, SKILLS, EXPERIENCES, CONVERSATION } from '../util/mocks';
import { ChatMessage } from '../domain/chat-message';
import { Experience } from './../domain/experience';
import { Language } from '../domain/language';
import { Comment } from '../domain/comment';
import { Education } from './../domain/education';
import { Skill } from '../domain/skill';
import { Candidate } from './../domain/candidate';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidatesService {

    constructor(private http: Http) { }

    getCandidate(candidateId: number): Observable<Candidate> {
        return this.http
            .get(RouterUtils.candidateUrl(candidateId))
            .map((res: Response) => <Candidate> res.json());
    }

    getCandidates(): Observable<Array<Array<Candidate>>> {
        return this.http
            .get(RouterUtils.candidatesUrl())
            .map((res: Response) => <Array<Array<Candidate>>> res.json());
    }

    getCandidateSkills(candidateId: number): Observable<Array<Skill>> {
        return this.http
            .get(RouterUtils.candidateSkillsUrl(candidateId))
            .map((res: Response) => <Array<Skill>> res.json());
    }

    getCandidateEducation(candidateId: number): Observable<Array<Education>> {
        return this.http
            .get(RouterUtils.candidateEducationUrl(candidateId))
            .map((res: Response) => <Array<Education>> res.json());
    }

    getCandidateInterests(candidateId: number): Observable<Array<Interest>> {
        return this.http
            .get(RouterUtils.candidateInterestsUrl(candidateId))
            .map((res: Response) => <Array<any>> res.json());
    }

    getCandidateExperience(candidateId: number): Observable<Array<Experience>> {
        return this.http
            .get(RouterUtils.candidateExperienceUrl(candidateId))
            .map((res: Response) => <Array<Experience>> res.json());
    }

    getCandidateLanguages(candidateId: number): Observable<Language[]> {
        return this.http
            .get(RouterUtils.candidateLanguagesUrl(candidateId))
            .map((res: Response) => <Language[]> res.json());
    }

    getCandidateComments(candidateId: number): Observable<Array<Comment>> {
        return this.http
            .get(RouterUtils.candidateCommentsUrl(candidateId))
            .map((res: Response) => <Array<Comment>> res.json());
    }

    getCandidateLikesNumber(candidateId: number): Observable<number> {
        return this.http
            .get(RouterUtils.candidateLikesUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }

    getCandidateCommentsNumber(candidateId: number): Observable<number> {
        return this.http
            .get(RouterUtils.candidateCommentsNumberUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }

    getCandidateRating(candidateId: number): Observable<number> {
        return this.http
            .get(RouterUtils.candidateRatingUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }
}