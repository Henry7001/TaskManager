import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { SignInComponent } from '../auth/components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PaginaInicialComponent,
    SignInComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class UiModule { }
