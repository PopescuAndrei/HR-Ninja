import { POSITION_BACKGROUNDS } from './constants';
import { Skill } from './skill';

export class Position {
	id: number;
	name: string;
	description: string;
	requirements: Array<Skill>
	creationDate : Date;
	image: string;

    constructor(id:number, name: string, description: string, requirements: Array<Skill>, creationDate: Date) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.requirements = requirements;
		this.creationDate = creationDate;

		this.setRandomImage();
	}

	private setRandomImage() {
		this.image = POSITION_BACKGROUNDS[Math.floor(Math.random() * POSITION_BACKGROUNDS.length)];
	}
}