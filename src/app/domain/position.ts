import { POSITION_BACKGROUNDS } from './constants';
import { Skill } from './skill';

export class Position {
	name: string;
	description: string;
	requirements: Array<Skill>
    creationDate : Date;

    constructor(name: string, description: string, requirements: Array<Skill>, creationDate: Date) {
		this.name = name;
		this.description = description;
		this.requirements = requirements;
		this.creationDate = creationDate;
	}

	randomImage() {
		return  POSITION_BACKGROUNDS[Math.floor(Math.random() * POSITION_BACKGROUNDS.length)]
	}
}