import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
    { path: 'portfolio',/*  canActivate:[GuardGuard], */  component: PortfolioComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login' , pathMatch: 'full' },
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
