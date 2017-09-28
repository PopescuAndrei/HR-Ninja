export class RouterUtils {

	static baseUrl: string =  "http://localhost:8080/RecruitingBot/api";

	/** URLs finishing in / need additional id parameter
	
	 * URLS:
	 * 
	 * /api/candidates
	 * /api/candidates/:candidateId
	 * /api/candidates/:candidateId/skills
	 * /api/candidates/:candidateId/interests
	 * /api/candidates/:candidateId/experience
	 * /api/candidates/:candidateId/education
	 * /api/candidates/:candidateId/languages
	 * /api/candidates/:candidateId/comments
	 * /api/chat/:candidateId
	 * 
	 * /api/positions
	 * /api/positions/:positionId
	 * /api/positions/:positionId/skills
	 * /api/positions/:positionId/candidates
	 * 
	 * /api/questions
	 * /api/questions/:questionId
	 * /api/questions/:questionId/replies
	 * 
	 * /api/interview/:candidateId
	 * 
	*/
	static candidates: string = "/candidates";
	static candidate: string = "/candidates/";
	static skills: string = "/skills/";
	static interests: string = "/interests";
	static experience: string = "/experience";
	static education: string = "/education";
	static languages: string = "/languages";
	static comments: string = "/comments";
	static likes: string = "/likes";
	static rating: string = "/rating";
	static chat: string = "/chat";

	static positions: string = "/positions";
	static position: string = "/positions/";
	static positionRequirements: string = "/skills"
	static positionCandidates: string="/candidates";

	static questions: string = "/questions";
	static question: string = "/questions/";
	static replies: string = "/replies";

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
	static candidateUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId;
	}

	/**
	 * Url for retrieving the skills associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateSkillsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.skills;
	}

	/**
	 * Url for retrieving the interests associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateInterestsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.interests ;
	}

	/**
	 * Url for retrieving the experience associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateExperienceUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.experience;
	}
	
	/**
	 * Url for retrieving the education associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateEducationUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.education;
	}
	
	/**
	 * Url for retrieving the languages associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateLanguagesUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.languages;
	}

	/**
	 * Url for retrieving the comments associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateCommentsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.comments;
	}

	/**
	 * Url for creating a comment for the candidate with the provided candidate id
	 * @param candidateId 
	 */
	static createCommentUrl(candidateId: number): string {
		return this.candidateCommentsUrl(candidateId);
	}

	/**
	 * Url for retrieving the number of likes associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateLikesUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.likes;
	}

	/**
	 * Url for liking a candidate with the provided id
	 * @param candidateId 
	 */
	static likeCandidateUrl(candidateId: number): string {
		return this.candidateLikesUrl(candidateId);
	}

	/**
	 * Url for retrieving the average rating associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateRatingUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.rating;
	}

	static rateCandidateUrl(candidateId: number): string {
		return this.candidateRatingUrl(candidateId);
	}

	/**
	 * Url for retrieving the chat associated with the candidate with the provided id
	 * @param candidateId 
	 */
	static candidateChatUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.chat;
	}

	/**
	 * Url for retrieving all the positions
	 */
	static positionsUrl(): string {
		return this.baseUrl + this.positions;
	}

	/**
	 * Url for retrieving the position with the provided id
	 * @param positionId 
	 */
	static positionUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId;
	}

	/**
	 * Url for creating a new Position entity
	 */
	static createPositionUrl() {
		return this.positionsUrl();
	}

	/**
	 * Url for deleting a Position entity with the provided id
	 * @param positionId 
	 */
	static deletePositionUrl(positionId: number): string {
		return this.positionUrl(positionId);
	}

	/**
	 * Url for retrieving the requirements associated with the position with the provided id
	 * @param positionId 
	 */
	static positionRequirementsUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.positionRequirements;
	}

	/**
	 * Url for creating a requirement for the position with the provided id
	 * @param positionId 
	 */
	static createPositionRequirementUrl(positionId: number): string {
		return this.positionRequirementsUrl(positionId);
	}

	/**
	 * Url for deleting a requirement with the provided id
	 */
	static deletePositionRequirementUrl(positionId: number, skillId: number): string {
		return this.positionRequirementsUrl(positionId) + "/" + skillId;
	}

	/**
	 * Url for retrieving the candidates associated with the position with the provided id
	 */
	static positionCandidatesUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.positionCandidates;
	}

	/**
	 * Url for retrieving all the questions
	 */
	static questionsUrl(): string {
		return this.baseUrl + this.questions;
	}

	/**
	 * Url for retrieving the question with the provided id
	 * @param questionId 
	 */
	static questionUrl(questionId: number): string {
		return this.baseUrl + this.question + questionId;
	}

	/**
	 * Url for creating a question
	 */
	static createQuestionUrl(): string {
		return this.questionsUrl();
	}

	/**
	 * Url for deleting the question with the provided id
	 * @param questionId 
	 */
	static deleteQuestionUrl(questionId: number) {
		return this.questionUrl(questionId);
	}

	/**
	 * Url for retrieving the replies associated with the question with the provided id
	 * @param questionId
	 */
	static repliesUrl(questionId: number): string {
		return this.baseUrl + this.question + questionId + this.replies;
	}

	/**
	 * Url for creating a reply for the question with the provided id
	 * @param questionId 
	 */
	static createReplyUrl(questionId: number): string {
		return this.repliesUrl(questionId)
	}

	/**
	 * Url for deleting the reply with the provided id
	 * @param replyId
	 */
	static deleteReplyUrl(questionId: number, replyId: number): string {
		return this.repliesUrl(questionId) + "/" + replyId;
	}
}