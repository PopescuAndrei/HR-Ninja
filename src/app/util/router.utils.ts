export class RouterUtils {

	static baseUrl: string =  "http://localhost:8080/RecruitingBot/api";

	// URLs finishing in / need additional id parameter
	// candidate-view
	static candidates: string = "/candidates";
	static candidate: string = "/candidates/";
	static skills: string = "/skills/";
	static interests: string = "/interests/";
	static experience: string = "/experience/";
	static education: string = "/education/";
	static languages: string = "/languages/";
	static comments: string = "/comments/";
	static chat: string = "/chat/";

	static positions: string = "/positions";
	static position: string = "/positions/";
	static positionRequirements: string = "/requirements"
	static positionCandidates: string="/candidates";

	static questions: string = "/questions";
	static question: string = "/questions/";
	static replies: string = "/replies/";

	/**
	 * Url for retrieving all the candidates
	 */
	static candidatesUrl(): string {
		return this.baseUrl + this.candidates; 
	}

	/**
	 * Url for retrieving the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateUrl(candidateId: number) {
		return this.baseUrl + this.candidates + candidateId;
	}

	/**
	 * Url for retrieving the skills associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateSkillsUrl(candidateId: number) {
		return this.baseUrl + this.skills + candidateId;
	}

	/**
	 * Url for retrieving the interests associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateInterestsUrl(candidateId: number) {
		return this.baseUrl + this.interests + candidateId;
	}

	/**
	 * Url for retrieving the experience associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateExperienceUrl(candidateId: number) {
		return this.baseUrl + this.experience + candidateId;
	}
	
	/**
	 * Url for retrieving the education associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateEducationUrl(candidateId: number) {
		return this.baseUrl + this.education + candidateId;
	}
	
	/**
	 * Url for retrieving the languages associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateLanguagesUrl(candidateId: number) {
		return this.baseUrl + this.languages + candidateId;
	}

	/**
	 * Url for retrieving the comments associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateCommentsUrl(candidateId: number) {
		return this.baseUrl + this.comments + candidateId;
	}

	/**
	 * Url for retrieving the chat associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateChatUrl(candidateId: number) {
		return this.baseUrl + this.chat + candidateId;
	}

	/**
	 * Url for retrieving all the positions
	 */
	static positionsUrl() {
		return this.baseUrl + this.positions;
	}

	/**
	 * Url for retrieving the position with the provided id
	 * @param positionId 
	 */
	static positionUrl(positionId: number) {
		return this.baseUrl + this.positions + positionId;
	}

	/**
	 * Url for retrieving the requirements associated with the position with the provided id
	 * @param positionId 
	 */
	static positionRequirementsUrl(positionId: number) {
		return this.baseUrl + this.positionRequirements + positionId;
	} 

	/**
	 * Url for retrieving the candidates associated with the position with the provided id
	 */
	static positionCandidatesUrl() {
		return this.baseUrl + this.positions + this.positionCandidates;
	}

	/**
	 * Url for retrieving all the questions
	 */
	static questionsUrl() {
		return this.baseUrl + this.questions;
	}

	/**
	 * Url for retrieving the question with the provided id
	 * @param questionId 
	 */
	static questionUrl(questionId: number) {
		return this.baseUrl + this.question + questionId;
	}

	/**
	 * Url for retrieving the replies associated with the question with the provided id
	 * @param questionId
	 */
	static repliesUrl(questionId: number) {
		return this.baseUrl + this.question + this.replies + questionId;
	}
}