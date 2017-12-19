import { COMMENT_NOT_SAVED, COMMENT_SAVED } from './../../util/messages';
import { NotificationService } from '../../services/notification.service';
import { CandidatesService } from './../../services/candidates.service';
import { User } from './../../domain/user';
import { AppStoreService } from './../../app-store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Comment } from './../../domain/comment';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  private candidateId: number;
  private user: User;
  private comments: Array<Comment>;
  private commentForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private appStore: AppStoreService,
    private candidateService: CandidatesService,
    private notificationService: NotificationService) { }

  ngOnInit() {   
    //here we should have the api call
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    )

    this.candidateService.getCandidateComments(this.candidateId)
      .subscribe(data => this.comments = data);

    this.initCommentForm();
    this.appStore.getLoggedInUser().subscribe(user => this.user = user);
  }

  initCommentForm() {
    this.commentForm = new FormGroup({
      message: new FormControl()
    });
  };

  addComment() {
   if(this.commentForm.value.message) {
    let newComment = new Comment(this.user.firstName + " " + this.user.lastName, this.user.avatar, this.commentForm.value.message,new Date());
    
    this.notificationService.showSuccess(COMMENT_SAVED);
    this.comments.push(newComment);
    this.initCommentForm();
   } else {
     this.notificationService.showError(COMMENT_NOT_SAVED);
   }
  }
}
