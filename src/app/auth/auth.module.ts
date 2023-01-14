import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthModule { }
