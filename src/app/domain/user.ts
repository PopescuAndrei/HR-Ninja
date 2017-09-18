import { FEMALE_AVATARS, MALE_AVATARS } from './constants';
export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;

    constructor(id: number, firstName: string, lastName: string, email:string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

        this.setAvatar();
    }

    private setAvatar() {
        if(Math.random() > 0.5) {
            this.avatar = MALE_AVATARS[Math.floor(Math.random() * MALE_AVATARS.length)];
        } else {
            this.avatar = FEMALE_AVATARS[Math.floor(Math.random() * FEMALE_AVATARS.length)];
        }
    }
}