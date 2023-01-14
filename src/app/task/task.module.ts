import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TodayComponent } from './views/today/today.component';



@NgModule({
  declarations: [DashboardComponent,TodayComponent],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
  ]
})
export class TaskModule { }
