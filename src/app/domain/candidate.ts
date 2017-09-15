import { FEMALE_AVATARS, MALE_AVATARS } from './constants';
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
    }

    private setAvatar() {
        if(this.gender === 'male') {
            this.avatar = MALE_AVATARS[Math.floor(Math.random() * MALE_AVATARS.length)];
        } else {
            this.avatar = FEMALE_AVATARS[Math.floor(Math.random() * FEMALE_AVATARS.length)];
        }
    }
}