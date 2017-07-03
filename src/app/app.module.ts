import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserTypesComponent } from './Components/user-types/user-types.component';
import { GendersComponent } from './Components/genders/genders.component';

import {UserService} from './Services/user.service';
import {HttpModule} from "@angular/http";
import { PackageComponent } from './Components/package/package/package.component';
import { ServiceComponent } from './Components/service/service.component';
import { ServicePriceComponent } from './Components/service-price/service-price.component';
import { UsageComponent } from './Components/usage/usage.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { ContainsComponent } from './Components/contains/contains.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserTypeService} from "./Services/user-type.service";
import {GendersService} from "./Services/genders.service";
import {ServicesService} from "./Services/services.service";
import {LogInService} from "./Services/log-in.service";
import {PackageService} from "./Services/package.service";
import {ContainsService} from "./Services/contains.service";

import { RouteReuseStrategy,RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesGymComponent } from './Components/services-gym/services-gym.component';
import { ProfileComponent } from './Components/profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'service',
    // redirectTo: 'viewServices',
    // pathMatch: 'full',
    canActivate: [AuthguardGuard],
    component: ServiceComponent
  },
  // { path: 'profile', component: ProfileComponent, children: [
  //   // { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
  //   { path: ':cardNumber', component: ProfileComponent, outlet: 'cardNumer' }
  // ] },
   {
     path: 'profile/:cardNumber',
     // redirectTo: 'viewServices',
     // pathMatch: 'full',
     canActivate: [AuthguardGuard],
     component: ProfileComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesGymComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: UsersComponent
  },
  // {
  //   path: 'viewService:name',
  //   component: ViewServiceComponent
  // }


];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserTypesComponent,
    GendersComponent,
    PackageComponent,
    ServiceComponent,
    ServicePriceComponent,
    UsageComponent,
    SubscriptionComponent,
    ContainsComponent,
    LogInComponent,
    RegisterComponent,
    MainComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ServicesGymComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,UserTypeService, GendersService, ServicesService,LogInService, AuthguardGuard, PackageService, ContainsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
