import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module')
        .then((m) => m.HomeModule)
    },
    {
      path: 'authentication',
      loadChildren: () => import('./authentication/authentication.module')
        .then((m) => m.AuthenticationModule)
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}
