import { Candidate } from './candidate';
import { Position } from './position';

export class CandidateScore {
	
	candidate: Candidate;
	score: number;

	constructor(candidate: Candidate, score: number) {
		this.candidate = candidate;
		this.score = score;
	}
}