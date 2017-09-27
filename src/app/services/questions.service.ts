import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Question } from '../domain/question';

@Injectable()
export class QuestionsService {

    constructor(private http: Http) { }

    getQuestions(): Observable<Array<Question>> {
        return this.http
            .get(RouterUtils.questionsUrl())
            .map((res: Response) => <Array<Question>> res.json());
    }

    getQuestion(questionId: number): Observable<Question> {
        return this.http
            .get(RouterUtils.questionUrl(questionId))
            .map((res: Response) => <Question> res.json());
    }

    // TODO: replace any with Reply model
    getQuestionReplies(questionId: number): Observable<Array<any>> {
        return this.http
            .get(RouterUtils.repliesUrl(questionId))
            .map((res: Response) => <Array<any>> res.json());
    }
}