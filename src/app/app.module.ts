import { QuestionCardComponent } from './interview/question-card/question-card.component';
import { QuestionsService } from './services/questions.service';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { ChatViewComponent } from './candidates/chat-view/chat-view.component';
import { PositionsService } from './services/positions.service';
import { CandidatesService } from './services/candidates.service';
import { PositionViewComponent } from './positions/position-view/position-view.component';
import { PositionCardComponent } from './positions/position-card/position-card.component';
import { CandidateListItemComponent } from './positions/candidate-list-item/candidate-list-item.component';
import { ExperienceTimelineComponent } from './candidates/experience-timeline/experience-timeline.component';
import { AppStoreService } from './app-store.service';
import { CommentViewComponent } from './candidates/comment-view/comment-view.component';
import { LanguageTableComponent } from './candidates/language-table/language-table.component';
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

@NgModule({
  declarations: [
    AppComponent, DashboardComponent,
    CandidatesComponent, CandidateCardComponent, LanguageTableComponent, CommentViewComponent, ChatViewComponent,
    ExperienceTimelineComponent, EducationTimelineComponent, CandidateViewComponent,
    PositionsComponent, PositionCardComponent, PositionViewComponent, CandidateListItemComponent,
    InterviewComponent, QuestionCardComponent,
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
  providers: [CandidatesService, PositionsService, QuestionsService, AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
