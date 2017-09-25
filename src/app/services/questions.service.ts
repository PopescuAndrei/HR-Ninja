import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Question } from '../domain/question';
import { QUESTIONS } from '../domain/mocks';

@Injectable()
export class QuestionsService {

    constructor(private http: Http) { }

    getQuestions(): Array<Question> {
        return QUESTIONS;
    }
}