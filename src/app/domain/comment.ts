export class Comment {
    author: string;
    avatarSrc : string;
    message: string;
    date: Date;

    constructor(author: string, avatarSrc: string, message: string, date: Date) {
        this.author = author;
        this.avatarSrc = avatarSrc;
        this.message = message;
        this.date = date;
    }
}