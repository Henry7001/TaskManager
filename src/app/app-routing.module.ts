import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/pages/dashboard/dashboard.component';
import { PaginaInicialComponent } from './ui/pages/pagina-inicial/pagina-inicial.component';
import { SignInComponent } from './ui/components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:PaginaInicialComponent},
  {path:'PaginaInicial', component:PaginaInicialComponent},
  {path:'SignIn', component:SignInComponent},
  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
