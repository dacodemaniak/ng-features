import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { UserGuard } from './user.guard';

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
      component: SigninComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'signout',
      component: SignoutComponent,
      canActivate: [UserGuard]
    },
    {
      path: 'register',
      component: RegisterComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}
