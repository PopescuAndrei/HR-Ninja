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
    private candidateService: CandidatesService) { }

  ngOnInit() {   
    //here we should have the api call
    this.route.params.forEach(
      (params: Params) => this.candidateId = params['id']
    )

    this.initCommentForm();
    this.comments = this.candidateService.getCommentsForCandidate();
    this.appStore.getLoggedInUser().subscribe(user => this.user = user);
  }

  initCommentForm() {
    this.commentForm = new FormGroup({
      message: new FormControl()
    });
  };

  addComment() {
   if(this.commentForm.value.message) {
    let newComment = new Comment(
       this.user.firstName + " " + this.user.lastName, 
       this.user.avatar, 
       this.commentForm.value.message, 
       new Date()
    );
    console.log(newComment);
    
    this.comments.push(newComment);
    this.initCommentForm();
   } else {
     console.log("not working");
   }
  }
}
