import { environment } from './../../environments/environment';
export class RestMappings {

	static baseUrl: string =  environment.herokuUrl? "https://recruitingmessbot.herokuapp.com/api" : "http://localhost:8080/api";

	static users = "/users";
	static auth = "/users/auth";

	static candidates: string = "/candidates";
	static candidate: string = "/candidates/";
	static skills: string = "/skills/";
	static interests: string = "/interests";
	static experience: string = "/experience";
	static education: string = "/education";
	static language: string = "/language";
	static languages: string = "/languages";
	static comments: string = "/comments";
	static commentsNumber: string = "/noComments";
	static likes: string = "/likes";
	static rating: string = "/rating";
	static chat: string = "/chat";
	static otherCandidates: string = "/otherCandidates";

	static positions: string = "/positions";
	static position: string = "/positions/";
	static positionRequirements: string = "/skills";
	static savePositionRequirementsBulk: string = '/skillsBulk';
	static positionCandidates: string="/candidates";

	static questions: string = "/questions";
	static question: string = "/questions/";
	static replies: string = "/replies";

	static progress: string = "/interviewProgress";

	static authUrl(): string {
		return this.baseUrl + this.auth;
	}

	static candidatesUrl(): string {
		return this.baseUrl + this.candidates; 
	}

	static candidateUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId;
	}

	static candidateSkillsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.skills;
	}

	static candidateInterestsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.interests ;
	}

	static candidateExperienceUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.experience;
	}
	
	static candidateEducationUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.education;
	}
	
	static candidateLanguagesUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.languages;
	}

	static candidateCommentsUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.comments;
	}

	static candidateCommentsNumberUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.commentsNumber;
	}

	static createCommentUrl(candidateId: number): string {
		return this.candidateCommentsUrl(candidateId);
	}

	static candidateLikesUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.likes;
	}

	static likeCandidateUrl(candidateId: number): string {
		return this.candidateLikesUrl(candidateId);
	}

	static candidateRatingUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.rating;
	}

	static rateCandidateUrl(candidateId: number): string {
		return this.candidateRatingUrl(candidateId);
	}

	static candidateChatUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.chat;
	}

	static candidateOthersUrl(candidateId: number): string {
		return this.baseUrl + this.candidate + candidateId + this.otherCandidates;
	}

	static allSkillsUrl(): string {
		return this.baseUrl + this.positionRequirements;
	}

	static allLanguagesUrl(): string {
		return this.baseUrl + this.languages;
	}
	
	static positionsUrl(): string {
		return this.baseUrl + this.positions;
	}

	static positionComparisonUrl(): string {
		return this.baseUrl + this.positions + "/all";
	}

	static positionUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId;
	}

	static createPositionUrl() {
		return this.positionsUrl();
	}

	static deletePositionUrl(positionId: number): string {
		return this.positionUrl(positionId);
	}

	static createSkillUrl(): string {
		return this.baseUrl + this.positionRequirements;
	}
	
	static positionRequirementsUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.positionRequirements;
	}

	static createPositionRequirementUrl(positionId: number): string {
		return this.positionRequirementsUrl(positionId);
	}

	static deletePositionRequirementUrl(positionId: number, skillName: string): string {
		return this.positionRequirementsUrl(positionId) + "/" + skillName;
	}

	static positionExperiencesUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.experience;
	}

	static createPositionExperienceUrl(positionId: number): string {
		return this.positionExperiencesUrl(positionId);
	}

	static deletePositionExperienceUrl(positionId: number, title: string): string {
		return this.positionExperiencesUrl(positionId) + "/" + title;
	}

	static positionLanguagesUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.languages;
	}

	static createPositionLanguageUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.language;
	}

	static deletePositionLanguageUrl(positionId: number, lang: string): string {
		return this.baseUrl + this.position + positionId + this.language + "/" + lang;
	}


	static positionCandidatesUrl(positionId: number): string {
		return this.baseUrl + this.position + positionId + this.positionCandidates;
	}

	static questionsUrl(): string {
		return this.baseUrl + this.questions;
	}

	static questionUrl(questionId: number): string {
		return this.baseUrl + this.question + questionId;
	}

	static updateQuestionsUrl(): string {
		return this.questionsUrl();
	}

	static deleteQuestionUrl(questionId: number) {
		return this.questionUrl(questionId);
	}

	static repliesUrl(questionId: number): string {
		return this.baseUrl + this.question + questionId + this.replies;
	}

	static createReplyUrl(questionId: number): string {
		return this.repliesUrl(questionId)
	}

	static deleteReplyUrl(questionId: number, replyId: number): string {
		return this.repliesUrl(questionId) + "/" + replyId;
	}

	static findProgressUrl(): string {
		return this.baseUrl + this.questions + this.progress;
	}
}