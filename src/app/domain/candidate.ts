import { Email } from './support.email';
import { MALE_AVATARS, FEMALE_AVATARS } from './../util/constants';

export class Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: Email;
    gender: string;
    phone: string;
    avatar?: string;
    color?: string;
    facebookUuid?: string;
    
    constructor(id: number, firstName: string, lastName: string, email:Email, gender: string, phone: string, avatar?: string, color?: string, facebookUuid?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.color = color;
        this.facebookUuid = facebookUuid;
        
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