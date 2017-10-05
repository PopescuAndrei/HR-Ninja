
import { Skill } from '../domain/skill';
import { Candidate } from '../domain/candidate';
import { Language } from '../domain/language';
import { Education } from '../domain/education';
import { Experience } from '../domain/experience';
import { ChatMessage } from '../domain/chat-message';
import { Question } from '../domain/question';
import { Position } from '../domain/position';
import { Comment } from '../domain/comment';

export const GENERIC_CANDIDATE: Candidate = new Candidate(1, 'Popescu', 'Andrei', 'andrei.popescu93@gmail.com', 'male', 'Awesome description', 23, 45, 9, '#EDB63F');
export const CHAT_BOT: Candidate = new Candidate(0, 'HR', 'Ninja', 'hr@ninja.com', 'male');

export const CANDIDATES: Array<Array<Candidate>> = [
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
    new Education("UPB - FILS", "MBAE", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00"), 9.5),
    new Education("UPB - FILS", "Computer Science", new Date("12/12/2012"), new Date("12/12/2016 12:00:00"), 9.5),
    new Education("CNDG - FILS", "Mate-Info", new Date("12/12/2008 12:00:00"), new Date("12/12/2012 12:00:00"), 9.3),
    new Education("Blocuri", "Scoala Vietii", new Date("12/12/2000 12:00:00"), new Date("12/12/2008 12:00:00"), 9.3)
];

export const COMMENTS: Array<Comment> = [
    new Comment("Mom", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Best candidate", new Date("2016/01/01 23:28:56")),
    new Comment("Dad", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Seems to be the best fit", new Date("2016/01/02 23:28:56")),
    new Comment("Girl", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Everyone should have an employee like him", new Date("2016/01/03 23:28:56")),
    new Comment("CEO", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "I'm telling you, i'm gonna step down and this guy will take my place!", new Date("2016/01/04 23:28:56")),
    new Comment("Fan", "http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80", "Definitely a keeper!", new Date("2016/01/05 23:28:56"))
];

export const EXPERIENCES: Array<Experience> = [
    new Experience("Software Engineer", "Ericsson","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
    new Experience("Software Developer Intern", "Teamnet", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
    new Experience("Android Developer Intern", "XLTeam", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.", new Date("12/12/2016 12:00:00"), new Date("12/12/2018 12:00:00")),
];

export const POSITIONS: Array<Array<Position>> = [
    [
    new Position(1, "Senior Java Developer", 
        "Work with the latest technologies, enhance and evolve together with the projects", 
        [new Skill("Java", 78), new Skill("Angular", 50)], 
        new Date("2016/01/01 23:28:56")),
    new Position(2, "Senior Architect", 
        "Work with Cloud Architectures, build and enhance existing ones.", 
        [new Skill("Java", 90), new Skill("Angular", 70)], 
        new Date("2016/01/01 23:28:56"))
    ], [
        new Position(3, "Senior Java Developer", 
            "Work with the latest technologies, enhance and evolve together with the projects", 
            [new Skill("Java", 78), new Skill("Angular", 50)], 
            new Date("2016/01/01 23:28:56")),
        new Position(4, "Senior Architect", 
            "Work with Cloud Architectures, build and enhance existing ones.", 
            [new Skill("Java", 90), new Skill("Angular", 70)], 
            new Date("2016/01/01 23:28:56"))
    ]];

export const CONVERSATION: Array<ChatMessage> = [
    new ChatMessage(1, GENERIC_CANDIDATE, "Hello", new Date("2016/01/01 22:00:08")),
    new ChatMessage(2, CHAT_BOT, "Hello. Nice to meet you. How can I help you?", new Date("2016/01/01 22:00:33")),
    new ChatMessage(3, GENERIC_CANDIDATE, "I would like to know about the open Java Position", new Date("2016/01/01 22:01:02")),
    new ChatMessage(4, CHAT_BOT, "Here is a list of the available position. Read them and tell me which one are you interested in.", new Date("2016/01/01 22:01:08")),
    new ChatMessage(5, GENERIC_CANDIDATE, "I'm interested in the Senior Java Architect One", new Date("2016/01/01 22:02:14")),
    new ChatMessage(6, CHAT_BOT, "Ok. So...how should we proceed? Do you want to tell me about your experience or should I ask you specific questions?", new Date("2016/01/01 22:02:15")),
    new ChatMessage(7, GENERIC_CANDIDATE, "I'll answer your questions.", new Date("2016/01/01 22:03:01")),
    new ChatMessage(8, CHAT_BOT, "What's your education?", new Date("2016/01/01 22:04:04")),
    new ChatMessage(9, GENERIC_CANDIDATE, "I've studied in UCLA for 3 years as a Computer Science student. I've graduated with 10 actually.", new Date("2016/01/01 22:05:08")),
    new ChatMessage(10, CHAT_BOT, "That's great. Anything else?", new Date("2016/01/01 22:06:08")),
    new ChatMessage(11, GENERIC_CANDIDATE, "I've also worked for Teamnet as a java developer for 2 years.", new Date("2016/01/01 22:07:08")),
    new ChatMessage(12, CHAT_BOT, "Sounds like you fit. I'll notice my colleagues and they will get back to you! Have a nice day!", new Date("2016/01/01 22:08:08")),
    new ChatMessage(13, GENERIC_CANDIDATE, "Ok. You to! And thank you for your time!", new Date("2016/01/01 22:09:08"))
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

export const QUESTIONS: Array<Question> = [
    new Question(1, 1, "Intrebarea UNU?", new Array<string>()),
    new Question(2, 2, "Intrebarea DOI?", new Array<string>()),
    new Question(3, 3, "Intrebarea TREI?", new Array<string>()),
    new Question(4, 4, "Intrebarea PATRU?", new Array<string>()),
    new Question(5, 5, "Intrebarea CINCI?", new Array<string>()),
    new Question(6, 6, "Intrebarea SASE?", new Array<string>()),
    new Question(7, 7, "Intrebarea SAPTE?", new Array<string>()),
    new Question(8, 8, "Intrebarea OPT?", new Array<string>()),
];