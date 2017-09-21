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
        redirectTo: 'dashboard',
        pathMatch: 'full',
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
        path: 'positions/:id',
        component: PositionViewComponent
    }, {
        path: 'interview',
        component: InterviewComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }
]
