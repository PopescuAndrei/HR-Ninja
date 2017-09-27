import { MALE_AVATARS, FEMALE_AVATARS } from './../util/constants';

export class Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar?: string;
    description?: string;
    likes?: number;
    comments?: number;
    rating?: number;
    color?: string;
    score? : number;

    constructor(id: number, firstName: string, lastName: string, email:string, gender: string, description?: string, likes?: number, comments?: number, rating?: number, color?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.description = description;
        this.likes = likes;
        this.comments = comments;
        this.rating = rating;
        this.color = color;

        this.setAvatar();
        this.score = Math.floor(Math.random() * 100) + 1;
    }

    private setAvatar() {
        if(this.gender === 'male') {
            this.avatar = MALE_AVATARS[Math.floor(Math.random() * MALE_AVATARS.length)];
        } else {
            this.avatar = FEMALE_AVATARS[Math.floor(Math.random() * FEMALE_AVATARS.length)];
        }
    }
}