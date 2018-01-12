import { Email } from './../domain/support.email';
import { User } from './../domain/user';
import { makeDecorator } from '@angular/core/src/util/decorators';
export const MALE_AVATARS: Array<string> = [
    'assets/img/faces/mCandidate1.png',
    'assets/img/faces/mCandidate2.png',
    'assets/img/faces/mCandidate3.png',
    'assets/img/faces/mCandidate4.png',
    'assets/img/faces/mCandidate5.png',
    'assets/img/faces/mCandidate6.png',
    'assets/img/faces/mCandidate7.png'
];

export const FEMALE_AVATARS: Array<string> = [
    'assets/img/faces/fCandidate1.png',
    'assets/img/faces/fCandidate2.png',
    'assets/img/faces/fCandidate3.png',
    'assets/img/faces/fCandidate4.png',
    'assets/img/faces/fCandidate5.png',
    'assets/img/faces/fCandidate6.png',
    'assets/img/faces/fCandidate7.png'
];

export const POSITION_BACKGROUNDS: Array<string> = [
    'assets/img/pos-bg/1.jpg',
    'assets/img/pos-bg/2.png',
    'assets/img/pos-bg/3.png',
    'assets/img/pos-bg/4.jpg',
    'assets/img/pos-bg/5.png',
    'assets/img/pos-bg/6.jpg'
]

export const ANONYMOUS_USER = new User(0, "", "", new Email(""), "");

export const LANGUAGE_LEVELS = [
    'Beginner',
    'Intermediate',
    'Very Good',
    'Expert'
];

export const JOB_TITLES = [
    'Developer',
    'Business Analyst',
    'Consultant',
    'Architect',
    'Team Leader',
    'Project Manager',
    'Recruiter',
    'Financial Advisor',
    'CFO',
    'CTO',
    'CEO'
]