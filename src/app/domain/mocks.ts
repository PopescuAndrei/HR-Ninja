import { ChatMessage } from './chat-message';
import { Position } from './position';
import { Experience } from './experience';
import { Language } from './language';
import { Education } from './education';
import { Skill } from './skill';
import { Candidate } from './candidate';
import { Comment } from './comment';

let GENERIC_CANDIDATE: Candidate = new Candidate(1, 'Popescu', 'Andrei','andrei.popescu93@gmail.com', 'male',  'Awesome description', 23, 45, 9, '#EDB63F');
let CHAT_BOT: Candidate = new Candidate(0, 'HR', 'Ninja', 'hr@ninja.com', 'male');

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
    new Comment("Mom", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Best candidate", new Date("2016-01-01T23:28:56.782Z")),
    new Comment("Dad", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Seems to be the best fit", new Date("2016-01-02T23:28:56.782Z")),
    new Comment("Girl", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Everyone should have an employee like him", new Date("2016-01-03T23:28:56.782Z")),
    new Comment("CEO", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "I'm telling you, i'm gonna step down and this guy will take my place!", new Date("2016-01-04T23:28:56.782Z")),
    new Comment("Fan", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Definitely a keeper!", new Date("2016-01-05T23:28:56.782Z"))
];

export const EXPERIENCES = [
    new Experience("Software Engineer", "Ericsson","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", "January 2016 - present"),
    new Experience("Software Developer Intern", "Teamnet", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", "June 2015 - October 2015"),
    new Experience("Android Developer Intern", "XLTeam", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", "June 2014 - October 2014"),
];

export const POSITIONS: Array<Position[]> = [
    [
    new Position(1, "Senior Java Developer", 
        "Work with the latest technologies, enhance and evolve together with the projects", 
        [new Skill("Java", 78), new Skill("Angular", 50)], 
        new Date("2016-01-01T23:28:56.782Z")),
    new Position(2, "Senior Architect", 
        "Work with Cloud Architectures, build and enhance existing ones.", 
        [new Skill("Java", 90), new Skill("Angular", 70)], 
        new Date("2016-01-01T23:28:56.782Z"))
    ], [
        new Position(3, "Senior Java Developer", 
            "Work with the latest technologies, enhance and evolve together with the projects", 
            [new Skill("Java", 78), new Skill("Angular", 50)], 
            new Date("2016-01-01T23:28:56.782Z")),
        new Position(4, "Senior Architect", 
            "Work with Cloud Architectures, build and enhance existing ones.", 
            [new Skill("Java", 90), new Skill("Angular", 70)], 
            new Date("2016-01-01T23:28:56.782Z"))
    ]];

export const CONVERSATION: Array<ChatMessage> = [
    new ChatMessage(1, this.GENERIC_CANDIDATE, "Hello"),
    new ChatMessage(2, this.CHAT_BOT, "Hello. Nice to meet you. How can I help you?"),
    new ChatMessage(3, this.GENERIC_CANDIDATE, "I would like to know about the open Java Position"),
    new ChatMessage(4, this.CHAT_BOT, "Here is a list of the available position. Read them and tell me which one are you interested in."),
    new ChatMessage(5, this.GENERIC_CANDIDATE, "I'm interested in the Senior Java Architect One"),
    new ChatMessage(6, this.CHAT_BOT, "Ok. So...how should we proceed? Do you want to tell me about your experience or should I ask you specific questions?"),
    new ChatMessage(7, this.GENERIC_CANDIDATE, "I'll answer your questions."),
    new ChatMessage(8, this.CHAT_BOT, "What's your education?"),
    new ChatMessage(9, this.GENERIC_CANDIDATE, "I've studied in UCLA for 3 years as a Computer Science student. I've graduated with 10 actually."),
    new ChatMessage(10, this.CHAT_BOT, "That's great. Anything else?"),
    new ChatMessage(11, this.GENERIC_CANDIDATE, "I've also worked for Teamnet as a java developer for 2 years."),
    new ChatMessage(12, this.CHAT_BOT, "Sounds like you fit. I'll notice my colleagues and they will get back to you! Have a nice day!"),
    new ChatMessage(13, this.GENERIC_CANDIDATE, "Ok. You to! And thank you for your time!")
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