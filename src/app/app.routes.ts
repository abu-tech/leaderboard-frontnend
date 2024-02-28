import { Routes } from '@angular/router';
import { CurrentWeekComponent } from './components/current-week/current-week.component';
import { LastWeekComponent } from './components/last-week/last-week.component';
import { UserRankComponent } from './components/user-rank/user-rank.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'current-week', component: CurrentWeekComponent },
    { path: 'last-week', component: LastWeekComponent },
    { path: 'user-rank', component: UserRankComponent },
    { path: '', component: HomeComponent },
];
