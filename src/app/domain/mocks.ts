import { Language } from './language';
import { Education } from './education';
import { Skill } from './skill';
import { Candidate } from './candidate';

export const CANDIDATES: Array<Candidate[]> = [
    [
        new Candidate(1, 'Popescu', 'Andrei','andrei.popescu93@gmail.com', 'male',  'Awesome description', 23, 45, 9, '#EDB63F'),
        new Candidate(2, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#DD8335'),
        new Candidate(3, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#D03A43'),
        new Candidate(4, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#A6315D')
    ], [ 
        new Candidate(5, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#734488'),
        new Candidate(6, 'Popescu', 'Andrei','andrei.popescu93@gmail.com', 'female', 'Awesome description', 23, 45, 9, '#3868A6'),
        new Candidate(7, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#449C76'),
        new Candidate(8, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#88B25C')
    ]
];

export const SKILLS: Array<Skill> = [
    new Skill("Java",100),
    new Skill("CSharp",50),
    new Skill("Python",30),
    new Skill("Sql",77),
    new Skill("Typescript", 46),
    new Skill("Spring", 80),
    new Skill("Hibernate", 70)
];

export const LANGUAGES: Array<Language> = [
    new Language("English", 100, 100, 90),
    new Language("German", 70, 20, 20)
];

export const EDUCATION: Array<Education> = [
    new Education("UPB - FILS", "MBAE", new Date("12.12.2016"), new Date("12.12.2018"), 9.5),
    new Education("UPB - FILS", "Computer Science", new Date("12.12.2012"), new Date("12.12.2016"), 9.5),
    new Education("CNDG - FILS", "Mate-Info", new Date("12.12.2008"), new Date("12.12.2012"), 9.3),
    new Education("Blocuri", "Scoala Vietii", new Date("12.12.2000"), new Date("12.12.2008"), 9.3)
];

export const COMMENTS = [
    new Comment("Mom", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Best candidate", "2016-01-01T23:28:56.782Z"),
    new Comment("Dad", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Seems to be the best fit", "2016-01-02T23:28:56.782Z"),
    new Comment("Girl", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Everyone should have an employee like him", "2016-01-03T23:28:56.782Z"),
    new Comment("CEO", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "I'm telling you, i'm gonna step down and this guy will take my place!", "2016-01-04T23:28:56.782Z"),
    new Comment("Fan", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Definitely a keeper!", "2016-01-05T23:28:56.782Z")
];

export const INTERESTS: Array<any> = [
    {
        "name":"Basketball"
    }, {
        "name":"Programming"
    }, {
        "name":"Swimming"
    }, {
        "name":"Traveling"
    }, {
        "name":"Rubbing the mint"
    }
]