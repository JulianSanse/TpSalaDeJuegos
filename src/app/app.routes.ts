import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { AboutmeComponent } from './components/aboutme-component/aboutme.component';
import { LoginComponent } from './components/login-component/login.component';

export const routes: Routes = [    
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutmeComponent },
    { path: 'login', component: LoginComponent},
    
    { path: '**', redirectTo: '/home', pathMatch:"full" }
    ];
