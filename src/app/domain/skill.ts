export class Skill {
    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
    
    public getColor(): any {
        return '#449C76';
    }
}