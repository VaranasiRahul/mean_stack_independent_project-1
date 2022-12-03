import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTRESUMEComponent } from './about-resume/about-resume.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AlphaComponent } from './alpha/alpha.component';
import { Alpha2Component } from './alpha2/alpha2.component';
import { Alpha3Component } from './alpha3/alpha3.component';
import { Alpha4Component } from './alpha4/alpha4.component';
import { Alpha5Component } from './alpha5/alpha5.component';
import { Alpha51Component } from './alpha51/alpha51.component';
import { Alpha6Component } from './alpha6/alpha6.component';
import { Alpha61Component } from './alpha61/alpha61.component';
import { Alpha7Component } from './alpha7/alpha7.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Login0Component } from './login0/login0.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadComponent } from './read/read.component';
import { TemphomeComponent } from './temphome/temphome.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login0', component: Login0Component },
  { path: 'about_resume', component: ABOUTRESUMEComponent },
  { path: 'alpha', component: AlphaComponent },
  { path: 'alpha2', component: Alpha2Component },
  { path: 'alpha3', component: Alpha3Component },
  { path: 'alpha4', component: Alpha4Component },
  { path: 'alpha7', component: Alpha7Component },
  { path: 'alpha51', component: Alpha51Component },
  { path: 'alpha61', component: Alpha61Component },
  { path: 'temphome', component: TemphomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: '**', pathMatch: 'full', component: Login0Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
