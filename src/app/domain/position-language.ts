export class PositionLanguage {
    name: string;
    level: string;
    levelColor: string;

    constructor(name: string, level: string) {
      this.name = name;
      this.level = level;
      
      if(this.level === 'Beginner') {
        this.levelColor = '#EDB63F'
      } else if (this.level === 'Intermediate') {
        this.levelColor = '#A6315D';
      } else if (this.level === 'Very Good') {
        this.levelColor =  '#88B25C';
      } else {
        this.levelColor =  '#3868A6';
      }
    }

    static levelValues(): Array<string> {
      return [
        'Beginner',
        'Intermediate',
        'Very Good',
        'Expert'
      ];
    }
}