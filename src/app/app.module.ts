import { AuthGuardService } from './services/auth.guard.service';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './services/auth.service';
import { SkillService } from './services/skill.service';
import { EditPositionComponent } from './positions/edit-position/edit-position.component';
import { EditQuestionComponent } from './interview/edit-question/edit-question.component';
import { CreatePositionComponent } from './positions/create-position/create-position.component';
import { NotificationService } from './services/notification.service';
import { ChatService } from './services/chat.service';
import { QuestionsService } from './services/questions.service';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { ChatViewComponent } from './candidates/chat-view/chat-view.component';
import { PositionsService } from './services/positions.service';
import { CandidatesService } from './services/candidates.service';
import { PositionViewComponent } from './positions/position-view/position-view.component';
import { PositionCardComponent } from './positions/position-card/position-card.component';
import { ExperienceTimelineComponent } from './candidates/experience-timeline/experience-timeline.component';
import { CommentViewComponent } from './candidates/comment-view/comment-view.component';
import { EducationTimelineComponent } from './candidates/education-timeline/education-timeline.component';
import { CandidateCardComponent } from './candidates/candidate-card/candidate-card.component';
import { InterviewComponent } from './interview/interview.component';
import { SettingsComponent } from './settings/settings.component';
import { PositionsComponent } from './positions/positions.component';
import { CandidateViewComponent } from './candidates/candidate-view/candidate-view.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { DashboardComponent }   from './dashboard/dashboard.component'
import { PublicPositionViewComponent } from './positions/public-position-view/public-position-view.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent,
    LoginComponent,
    CandidatesComponent, CandidateCardComponent, CommentViewComponent, ChatViewComponent, ExperienceTimelineComponent, EducationTimelineComponent, CandidateViewComponent,
    PositionsComponent, PositionCardComponent, PositionViewComponent, CreatePositionComponent, EditPositionComponent,
    PublicPositionViewComponent,
    SkillsComponent,
    InterviewComponent, EditQuestionComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    DragulaModule
  ],
  providers: [CandidatesService, ChatService, PositionsService, QuestionsService, SkillService,  
              NotificationService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
