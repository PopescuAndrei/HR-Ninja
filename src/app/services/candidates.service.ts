import { Experience } from './../domain/experience';
import { Language } from '../domain/language';
import { Comment } from '../domain/comment';
import { CANDIDATES, COMMENTS, EDUCATION, INTERESTS, LANGUAGES, SKILLS, EXPERIENCES } from './../domain/mocks';
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

    getExperienceForCandidate(): Array<Experience> {
        return EXPERIENCES;
    }

    getLanguagesForCandidate(): Array<Language> {
        return LANGUAGES;
    }

    getCommentsForCandidate(): Array<Comment> {
        return COMMENTS;
    }
}