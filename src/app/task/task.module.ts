import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TodayComponent } from './views/today/today.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { TodosComponent } from './views/todos/todos.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TodayComponent,
    AddTaskComponent,
    AddTaskFormComponent,
    TodosComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
  ]
})
export class TaskModule { }
