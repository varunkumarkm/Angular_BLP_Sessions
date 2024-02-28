import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'list-user', component: ListUserComponent }
];
