import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forChild(HomeRoutingModule.routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: HomeComponent
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}
