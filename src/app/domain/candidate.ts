import { Email } from './support.email';
import { MALE_AVATARS, FEMALE_AVATARS } from './../util/constants';

export class Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: Email;
    gender: string;
    avatar?: string;
    color?: string;
    score?: number;

    constructor(id: number, firstName: string, lastName: string, email:Email, gender: string, score?: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.score = score;
        
        this.setAvatar();
    }

    private setAvatar() {
        if(this.gender === 'male') {
            this.avatar = MALE_AVATARS[Math.floor(Math.random() * MALE_AVATARS.length)];
        } else {
            this.avatar = FEMALE_AVATARS[Math.floor(Math.random() * FEMALE_AVATARS.length)];
        }
    }
}