import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { httpService } from './services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { User } from './interface/user';



@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [httpService, HttpClient,HttpClientModule],
  exports: [LoginComponent, SignInComponent, HttpClientModule]
})
export class AuthModule { }
