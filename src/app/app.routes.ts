import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DivisionShellComponent } from './home/division-shell/division-shell.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'crea', component: DivisionShellComponent }
];
