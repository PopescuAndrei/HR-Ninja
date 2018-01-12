import { CandidateCandidateComparisonComponent } from './candidates/candidate-candidate-comparison/candidate-candidate-comparison.component';
import { PublicPositionViewComponent } from './positions/public-position-view/public-position-view.component';
import { LoginComponent } from './auth/login/login.component';
import { EditPositionComponent } from './positions/edit-position/edit-position.component';
import { EditQuestionComponent } from './interview/edit-question/edit-question.component';
import { CreatePositionComponent } from './positions/create-position/create-position.component';
import { ChatViewComponent } from './candidates/chat-view/chat-view.component';
import { PositionViewComponent } from './positions/position-view/position-view.component';
import { CommentViewComponent } from './candidates/comment-view/comment-view.component';
import { SettingsComponent } from './settings/settings.component';
import { InterviewComponent } from './interview/interview.component';
import { PositionsComponent } from './positions/positions.component';
import { CandidateViewComponent } from './candidates/candidate-view/candidate-view.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AuthGuardService } from './services/auth.guard.service';
import { CandidatePositionComparisonComponent } from './candidates/candidate-position-comparison/candidate-position-comparison.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates',
        component: CandidatesComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates/:id',
        component: CandidateViewComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates/:id/comments',
        component: CommentViewComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates/:id/chat',
        component: ChatViewComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates/:fCandidateId/comparison/:sCandidateId',
        component: CandidateCandidateComparisonComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'candidates/:candidateId/positionComparison/:positionId',
        component: CandidatePositionComparisonComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'positions',
        component: PositionsComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'positions/new',
        component: CreatePositionComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'positions/edit-position/:id',
        component: EditPositionComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'positions/:id',
        component: PositionViewComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'interview',
        component: InterviewComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'interview/edit-question/:id',
        component: EditQuestionComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'skills',
        component: SkillsComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'public-positions/:id',
        component: PublicPositionViewComponent
    }
]
