import { POSITION_BACKGROUNDS } from '../util/constants';
import { Skill } from './skill';

export class Position {
	id: number;
	title: string;
	description: string;
	creationDate : Date;
	lastUpdate: Date;
	image: string;

    constructor(id:number, title: string, description: string, creationDate: Date, image: string, lastUpdate?: Date) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.creationDate = creationDate;
		this.lastUpdate = lastUpdate;
		this.image = image;
	}
}