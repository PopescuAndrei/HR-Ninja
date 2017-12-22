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
        component: DashboardComponent
    }, {
        path: 'candidates',
        component: CandidatesComponent
    }, {
        path: 'candidates/:id',
        component: CandidateViewComponent
    }, {
        path: 'candidates/:id/comments',
        component: CommentViewComponent
    }, {
        path: 'candidates/:id/chat',
        component: ChatViewComponent
    }, {
        path: 'positions',
        component: PositionsComponent
    }, {
        path: 'positions/new',
        component: CreatePositionComponent
    }, {
        path: 'positions/edit-position/:id',
        component: EditPositionComponent
    }, {
        path: 'positions/:id',
        component: PositionViewComponent
    }, {
        path: 'interview',
        component: InterviewComponent
    }, {
        path: 'interview/edit-question/:id',
        component: EditQuestionComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }
]
