import { Language } from '../domain/language';
import { CANDIDATES, EDUCATION, INTERESTS, LANGUAGES, SKILLS } from './../domain/mocks';
import { Education } from './../domain/education';
import { Skill } from '../domain/skill';
import { Candidate } from './../domain/candidate';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CandidatesService {

    constructor(private http: Http) { }

    getCandidates(): Array<Candidate[]> {
        return CANDIDATES;
    }

    getSkillsForCandidate(): Array<Skill> {
        return SKILLS;
    }

    getEducationForCandidate(): Array<Education> {
        return EDUCATION;
    }

    getInterestsForCandidate(): Array<any> {
        return INTERESTS;
    }

    getLanguagesForCandidate(): Array<Language> {
        return LANGUAGES;
    }
}