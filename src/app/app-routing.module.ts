import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
//import { Thankyou } from './thankyou/thankyou.component';

const routes: Routes = [
	{
    component: SignupComponent,
    path: 'sign'
  },
   {
     component: LinkedinComponent,
     path: 'linkedin'
   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
