import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  imports: [RouterModule.forChild(AuthenticationRoutingModule.routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full'
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'signout',
      component: SignoutComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}
