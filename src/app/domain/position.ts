import { POSITION_BACKGROUNDS } from './../util/constants';
import { Skill } from './skill';

export class Position {
	id: number;
	name: string;
	description: string;
	creationDate : Date;
	lastUpdate: Date;
	image: string;

    constructor(id:number, name: string, description: string, creationDate: Date, image: string, lastUpdate?: Date) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.creationDate = creationDate;
		this.lastUpdate = lastUpdate;
		this.image = image;
		if(image === null) {
			this.image = POSITION_BACKGROUNDS[Math.floor(Math.random() * POSITION_BACKGROUNDS.length)]
		}
	}
}