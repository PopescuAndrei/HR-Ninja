import { Observable } from 'rxjs/Rx';
import { RouterUtils } from './../util/router.utils';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Question } from '../domain/question';
import { Reply } from '../domain/reply';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

    private headers: Headers; 
    private options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

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

    getQuestionReplies(questionId: number): Observable<Array<Reply>> {
        return this.http
            .get(RouterUtils.repliesUrl(questionId))
            .map((res: Response) => <Array<Reply>> res.json());
    }

    updateQuestion(question: Question): Observable<Question> {
        return this.http
            .post(RouterUtils.questionUrl(question.id), JSON.stringify(question), this.options)
            .map((res: Response) => <Question> res.json());
    }

    updateQuestions(questions: Array<Question>): Observable<Array<Question>> {
        return this.http
            .post(RouterUtils.updateQuestionsUrl(), JSON.stringify(questions), this.options)
            .map((res: Response) => <Array<Question>> res.json());
    }

    addReplyForQuestion(questionId: number, reply: Reply): Observable<Reply> {
        return this.http
            .post(RouterUtils.createReplyUrl(questionId), JSON.stringify(reply), this.options)
            .map((res: Response) => <Reply> res.json());
    }

    removeReply(questionId: number, replyId: number): Observable<Reply> {
        return this.http
            .delete(RouterUtils.deleteReplyUrl(questionId, replyId))
            .map((res: Response) => <Reply> res.json());
    }

    findProgress(): Observable<boolean> {
        return this.http
            .get(RouterUtils.findProgressUrl())
            .map((res: Response) => <boolean> res.json());
    }
}