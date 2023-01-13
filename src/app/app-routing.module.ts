import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/pages/dashboard/dashboard.component';
import { PaginaInicialComponent } from './ui/pages/pagina-inicial/pagina-inicial.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:PaginaInicialComponent},
  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
