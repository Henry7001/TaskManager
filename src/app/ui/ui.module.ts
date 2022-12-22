import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PaginaInicialComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class UiModule { }
