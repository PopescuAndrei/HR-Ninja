import { CandidateListItemComponent } from './positions/candidate-list-item/candidate-list-item.component';
import { ExperienceTimelineComponent } from './candidates/experience-timeline/experience-timeline.component';
import { AppStoreService } from './app-store.service';
import { CommentViewComponent } from './candidates/comment-view/comment-view.component';
import { LanguageTableComponent } from './candidates/language-table/language-table.component';
import { EducationTimelineComponent } from './candidates/education-timeline/education-timeline.component';
import { CandidatesService } from './candidates/candidates.service';
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

import { DashboardComponent }   from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CandidateCardComponent,
    CandidatesComponent,
    LanguageTableComponent,
    CommentViewComponent,
    ExperienceTimelineComponent,
    EducationTimelineComponent,
    CandidateViewComponent,
    CandidateListItemComponent,
    PositionsComponent,
    SettingsComponent,
    InterviewComponent
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
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
