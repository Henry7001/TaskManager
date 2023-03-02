import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { UiModule } from './ui/ui.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TaskModule } from './task/task.module';
import { httpService } from './auth/services/http.service';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { User } from './auth/interface/user';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule,
    UiModule,
    AuthModule,
    NotificationsModule,
    TaskModule
  ],
  providers: [httpService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
