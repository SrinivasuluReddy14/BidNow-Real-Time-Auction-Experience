import { RouterModule , Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { LandingpageComponent } from './Milestone1/landingpage/landingpage.component';
import { RegisterpageComponent } from './Milestone1/registerpage/registerpage.component';
import { LoginpageComponent } from './Milestone1/loginpage/loginpage.component';
import { ForgotPasswordComponent } from './Milestone1/forgotpassword/forgotpassword.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'register', component: RegisterpageComponent },
  {path:'login',component:LoginpageComponent},
  {path: 'password-recovery', component:ForgotPasswordComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{ }