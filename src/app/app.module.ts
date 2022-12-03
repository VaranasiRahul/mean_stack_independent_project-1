import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { LoginComponent } from './login/login.component';
import { Login0Component } from './login0/login0.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ABOUTRESUMEComponent } from './about-resume/about-resume.component';
import { NameComponent } from './name/name.component';
import { TemphomeComponent } from './temphome/temphome.component';
import { AlphaComponent } from './alpha/alpha.component';
import { Alpha2Component } from './alpha2/alpha2.component';
import { Alpha3Component } from './alpha3/alpha3.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Alpha4Component } from './alpha4/alpha4.component';
import { Alpha51Component } from './alpha51/alpha51.component';
import { Alpha61Component } from './alpha61/alpha61.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UpdateComponent,
    ReadComponent,
    LoginComponent,
    Login0Component,
    PageNotFoundComponent,
    ABOUTRESUMEComponent,
    NameComponent,
    TemphomeComponent,
    AlphaComponent,
    Alpha2Component,
    Alpha3Component,
    Alpha4Component,
    Alpha51Component,
    Alpha61Component,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }