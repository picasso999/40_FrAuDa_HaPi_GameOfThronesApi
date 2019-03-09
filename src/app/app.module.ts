import { Route, RouterModule } from '@angular/router';

import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AppComponent } from './app.component';
// App components
import { AppComponent } from './app.component';
// App routing modules
import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
import { AuthGuard } from './Auth_1/shared/guard/auth.guard';
// import { AuthGuard } from "./Auth_1/auth.guard";
// Auth service
import { AuthService } from './Auth_1/shared/services/auth.service';
import { BookInfoComponent } from './book-info/book-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterInfoComponent } from './character-info/character-info.component';
// import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { GotHttpService } from './got-http.service';
import { HomeComponent } from './home/home.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    HouseInfoComponent,
    CharacterInfoComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
      // {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'character/:id', component:CharacterInfoComponent, canActivate: [AuthGuard]},
      {path:'book/:id', component:BookInfoComponent, canActivate: [AuthGuard]},
      {path:'house/:id', component:HouseInfoComponent, canActivate: [AuthGuard]}
      // {path:'**',component:NotFoundComponent}
    ]),
    AppRoutingModule1,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    GotHttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
