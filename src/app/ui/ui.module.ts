import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginaInicialComponent
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
