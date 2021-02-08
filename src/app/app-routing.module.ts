import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { CrudPageComponent } from './crud/crud-page/crud-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { GalleryPageComponent } from './gallery/gallery-page/gallery-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'crud', component: CrudPageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'gallery', component: GalleryPageComponent},
  { path: 'profile', component: ProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
