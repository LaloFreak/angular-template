import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component'
import { LoginAction } from './components/login/login.actions';
import { SignupComponent } from './components/signup/signup.component';
import { SignupAction } from './components/signup/signup.actions';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LandingComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SignupAction,
    LoginAction,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
