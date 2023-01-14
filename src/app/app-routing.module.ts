import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './ui/pages/pagina-inicial/pagina-inicial.component';
import { DashboardComponent } from './task/page/dashboard/dashboard.component';
import { TodayComponent } from './task/views/today/today.component';
import { ProximosComponent } from './task/views/proximos/proximos.component';
import { TerminadosComponent } from './task/views/terminados/terminados.component';

const routes: Routes = [
  {path:'',component:PaginaInicialComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    { path: 'today', component: TodayComponent, outlet: 'views'},
    { path: 'proximos', component: ProximosComponent, outlet: 'views'},
    { path: 'terminados', component: TerminadosComponent, outlet: 'views'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
