import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './ui/sign-in/sign-in.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { PaginaInicialComponent } from './ui/pagina-inicial/pagina-inicial.component';


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
