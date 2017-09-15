export class Language {
    name: string;
    understanding: number;
    writing: number;
    speaking: number;

    constructor(name: string, understanding: number, writing: number, speaking: number) {
        this.name = name;
        this.understanding = understanding;
        this.writing = writing;
        this.speaking = speaking;
    }
}