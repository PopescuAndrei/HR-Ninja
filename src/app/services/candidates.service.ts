import { Interest } from './../domain/interest';
import { Observable } from 'rxjs/Rx';
import { RestMappings } from '../util/router.utils';
import { ChatMessage } from '../domain/chat-message';
import { Experience } from './../domain/experience';
import { Language } from '../domain/language';
import { Comment } from '../domain/comment';
import { Education } from './../domain/education';
import { Skill } from '../domain/skill';
import { Candidate } from './../domain/candidate';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidatesService {

    private headers: Headers; 
    private options: RequestOptions;
  
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    getCandidate(candidateId: number): Observable<Candidate> {
        return this.http
            .get(RestMappings.candidateUrl(candidateId))
            .map((res: Response) => <Candidate> res.json());
    }

    getCandidates(): Observable<Array<Array<Candidate>>> {
        return this.http
            .get(RestMappings.candidatesUrl())
            .map((res: Response) => <Array<Array<Candidate>>> res.json());
    }

    getCandidateSkills(candidateId: number): Observable<Array<Skill>> {
        return this.http
            .get(RestMappings.candidateSkillsUrl(candidateId))
            .map((res: Response) => <Array<Skill>> res.json());
    }

    getCandidateEducation(candidateId: number): Observable<Array<Education>> {
        return this.http
            .get(RestMappings.candidateEducationUrl(candidateId))
            .map((res: Response) => <Array<Education>> res.json());
    }

    getCandidateInterests(candidateId: number): Observable<Array<Interest>> {
        return this.http
            .get(RestMappings.candidateInterestsUrl(candidateId))
            .map((res: Response) => <Array<any>> res.json());
    }

    getCandidateExperience(candidateId: number): Observable<Array<Experience>> {
        return this.http
            .get(RestMappings.candidateExperienceUrl(candidateId))
            .map((res: Response) => <Array<Experience>> res.json());
    }

    getCandidateLanguages(candidateId: number): Observable<Language[]> {
        return this.http
            .get(RestMappings.candidateLanguagesUrl(candidateId))
            .map((res: Response) => <Language[]> res.json());
    }

    getCandidateComments(candidateId: number): Observable<Array<Comment>> {
        return this.http
            .get(RestMappings.candidateCommentsUrl(candidateId))
            .map((res: Response) => <Array<Comment>> res.json());
    }

    getCandidateLikesNumber(candidateId: number): Observable<number> {
        return this.http
            .get(RestMappings.candidateLikesUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }

    getCandidateCommentsNumber(candidateId: number): Observable<number> {
        return this.http
            .get(RestMappings.candidateCommentsNumberUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }

    getCandidateRating(candidateId: number): Observable<number> {
        return this.http
            .get(RestMappings.candidateRatingUrl(candidateId))
            .map((res: Response) => <number> res.json());
    }

    createCandidateComment(candidateId: number, comment: Comment): Observable<Comment> {
        return this.http
            .post(RestMappings.createCommentUrl(candidateId), JSON.stringify(comment), this.options)
            .map((res: Response) => <Comment> res.json());
    }

    getOtherCandidates(candidateId: number): Observable<Array<Candidate>> {
        return this.http
            .get(RestMappings.candidateOthersUrl(candidateId))
            .map((res: Response) => <Array<Candidate>> res.json());
    }
}